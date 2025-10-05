import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen flex justify-center p-6">
      <div className="w-[500px] space-y-5">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="link link-hover absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes de Tarefas</Title>
        </div>
        <div className="card card-border bg-base-100 shadow">
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
