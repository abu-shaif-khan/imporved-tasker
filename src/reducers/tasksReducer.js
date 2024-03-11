export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "Add_Task": {
      return [...tasks, action.payload];
    }
    case "Toggle_Favorite": {
        return tasks.map((task) => {
            if (task.id === action.payload.id) return {...task, isFavorite : !task.isFavorite}
            else return task
        } )
        
    }
    case "Edit_Task": {
      return tasks.map((task) => {
        if (task.id === action.payload.id) return action.payload;
        else return task;
      });
    }
    case "Deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    case "Delete_All": {
      return [];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
