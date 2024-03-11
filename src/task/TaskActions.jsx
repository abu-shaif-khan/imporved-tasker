import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import AddEditModal from "./AddEditModal";
import AllDeleteModal from "./AllDeleteModal";
import SearchTask from "./SearchTask";

export default function TaskActions() {
  const { tasks, dispatch } = useTasks();
  const [showAllDeleteModal, setShowAllDeleteModal] = useState(false);
  const [showAddEditModal, setShowAddEditModal] = useState(false);

  const handleAllDelete = () => {
    dispatch({
      type: "Delete_All",
    });
    setShowAllDeleteModal(false);
  };

  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>

        <div className="flex items-center space-x-5">
          {/* <!-- Search Box --> */}

          <SearchTask />
          {/* <!-- Search Box Ends --> */}
          <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={() => setShowAddEditModal(true)}
          >
            Add Task
          </button>
          <button
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={() => setShowAllDeleteModal(true)}
          >
            Delete All
          </button>
        </div>
      </div>
      {showAllDeleteModal && (
        <AllDeleteModal
          onDelete={handleAllDelete}
          onClose={() => setShowAllDeleteModal(false)}
        />
      )}
      {showAddEditModal && (
        <AddEditModal onCloseModal={() => setShowAddEditModal(false)} />
      )}
    </>
  );
}
