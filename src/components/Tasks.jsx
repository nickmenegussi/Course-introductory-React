import { ChevronRightIcon, Trash, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tasks({ tasks, onTaskClick, removeTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    // melhora e prefine erro na query (os dados do parametro)
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.Description)
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.iscompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetails(task)}
            
          >
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => removeTaskClick(task.id)}
            
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
