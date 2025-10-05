import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="card card-border bg-base-100 shadow mb-5">
      <div className="card-body">
        <Input
          type="text"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Digite a descrição da tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              return alert("Preencha o título e a descrição da tarefa.");
            }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
          className="btn btn-primary mt-3"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default AddTask;
