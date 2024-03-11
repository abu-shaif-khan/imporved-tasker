import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import { TasksProvider } from "./contexts/TaskContext";
import TaskBoard from "./task/TaskBoard";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TasksProvider>
          <TaskBoard />
          <ToastContainer position="top-right" theme="dark" />
        </TasksProvider>
      </div>
      <Footer />
    </>
  );
}
