import Link from "next/link";
import DeleteForm from "@/components/DeleteForm";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return (
      <div className="flex items-center justify-center ">
        <div className="card bg-base-100 shadow-xl w-96">
          <div className="card-body">
            <h2 className="card-title text-center text-lg font-bold">
              No Tasks Available
            </h2>
            <p className="text-center">
              You have no tasks at the moment. Please add a new task to get started!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto min-h-screen p-4 mt-5">
      <table className="table table-zebra w-full">
        {/* Table Head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Content</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={task.id}
              className="border border-base-300 rounded-lg shadow-lg"
            >
              <th>{index + 1}</th>
              <td>{task.content}</td>
              <td>{new Date(task.createdAt).toLocaleDateString()}</td>
              <td className={`text-lg font-bold capitalize ${task.completed ? 'line-through' : ''}`}>
                {task.completed ? "Completed" : "Incomplete"}
              </td>
              <td className="flex gap-6 items-center">
                <Link
                  href={`/tasks/${task.id}`}
                  className="btn btn-xs btn-accent mr-2"
                >
                  Edit
                </Link>
                <DeleteForm id={task.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
