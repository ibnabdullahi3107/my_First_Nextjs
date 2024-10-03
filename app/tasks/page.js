import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
export const dynamic = "force-dynamic";
const TaskPage = () => {
  return (
    <div className="animate-fadeIn">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskPage;
