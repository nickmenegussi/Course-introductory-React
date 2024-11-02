import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  
  // State 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          // verificar se existe os conteúdos que iremos pegar.
          if (!title.trim() || !description.trim() ){
            return alert("Prencha o título e a descrição da tarefa.")
          }
          onAddTaskSubmit(title, description)
          setTitle("")
          setDescription("")
        }}
        className="bg-slate-400 font-medium text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
