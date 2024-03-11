import { useTasks } from "../contexts/TaskContext";
import NoSearchTaskFound from "./NoSearchTaskFound";
import NoTaskFound from "./NoTaskFound";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const { tasks, searchText } = useTasks();
  const findSearchTerm = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.trim().toLowerCase())
  );
  const hasSearchTask = findSearchTerm.length > 0;
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          {tasks.length > 0 ? (
            hasSearchTask ? (
              <TaskList tasks={findSearchTerm}/>
            ) : (
              <NoSearchTaskFound searchText={searchText} />
            )
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
}
