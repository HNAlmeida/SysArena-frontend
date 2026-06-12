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
    navigate(`/tasks/${task.id}?${query.toString()}`);
  }

  return (
    <div className="card bg-base-100 shadow card-border">
      <div className="card-body space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="join w-full">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`btn join-item flex flex-1 items-center gap-2 btn-outline btn-soft ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="btn join-item flex-none btn-outline btn-soft"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="btn join-item flex-none btn-soft btn-error"
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
