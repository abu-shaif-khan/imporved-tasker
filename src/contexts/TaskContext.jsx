import { createContext, useContext, useReducer, useState } from "react";
import { taskData } from "../data/taskData";
import tasksReducer from "../reducers/tasksReducer";

export const TasksContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, taskData);
  const [searchText, setSearchText] = useState("");
  return (
    <TasksContext.Provider
      value={{ tasks, dispatch, searchText, setSearchText }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
