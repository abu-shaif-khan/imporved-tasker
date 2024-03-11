import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import DeleteModal from "./DeleteModal";
import AddEditModal from "./AddEditModal";
import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks }) {
  const { dispatch } = useTasks();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showAddEditModal, setShowAddEditModal] = useState(false);

  const handleDeleteTaskModal = (task) => {
    setSelectedTask(task);
    setShowDeleteModal(true);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setShowAddEditModal(true);
  };
  const handleCloseDeleteModal = (task) => {
    dispatch({
      type: "Deleted",
      id: task.id,
    });
    setSelectedTask(null);
    setShowDeleteModal(false);
  };
  const handleCloseModal = () => {
    setSelectedTask(null);
    setShowDeleteModal(false);
  };
  const handleFavorite = (taskId) => {
    
    dispatch({
      type: "Toggle_Favorite",
      payload: {
        id: taskId,
      },
    });
  };
  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          task={selectedTask}
          onDelete={() => handleCloseDeleteModal(selectedTask)}
          onClose={handleCloseModal}
        />
      )}
      {showAddEditModal && (
        <AddEditModal
          onCloseModal={() => setShowAddEditModal(false)}
          editTask={selectedTask}
        />
      )}
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {" "}
                Title{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                {" "}
                Description{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {" "}
                Tags{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Options{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
              >
                <td>
                  <button onClick={() => handleFavorite(task.id)}>
                    {task.isFavorite ? (
                      <FaStar color="yellow" />
                    ) : (
                      <FaStar color="gray" />
                    )}
                  </button>

                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </td>
                <td>{task.title}</td>
                <td>
                  <div>{task.description}</div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="text-center">{task.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      className="text-blue-500"
                      onClick={() => handleEditTask(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteTaskModal(task)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
