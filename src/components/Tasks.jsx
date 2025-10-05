import {
  CheckIcon,
  ChevronRightIcon,
  Trash2Icon,
  TrashIcon,
} from "lucide-react";
import { useNavigate } from "react-router";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div className="card card-border bg-base-100 shadow">
      <div className="card-body space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="join w-full">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`btn btn-soft btn-outline flex-1 join-item flex items-center gap-2 ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="btn btn-soft btn-outline flex-none join-item"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="btn btn-soft btn-error flex-none join-item"
            >
              <Trash2Icon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
