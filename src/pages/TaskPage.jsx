import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="flex h-screen justify-center p-6">
      <div className="w-125 space-y-5">
        <div className="relative flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 bottom-0 left-0 link link-hover"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes de Tarefas</Title>
        </div>
        <div className="card bg-base-100 shadow card-border">
          <div className="card-body space-y-2">
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
