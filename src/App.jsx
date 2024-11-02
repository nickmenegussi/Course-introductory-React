import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  )
  
  // cria um evento quando a tasks ou a lista for alterada
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])
  function onAddTaskSubmit(title, description){
    const newTask = {
      id: tasks.length + 1,
      title: title,
      Description: description,
      iscompleted: false
    }
    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    // uma forma de fazer um async await
    const fetchTasks = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',{
        method: "GET"
      })
      const data = await response.json()
      setTasks(data)
    }
    // usando uma api
    // fetchTasks()

  })
  
  function removeTaskClick(taskId){
    // a lista vai ter todas as tarefas menos a que eu vou clicar
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }
  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if (task.id === taskId){
        return {...task, iscompleted: !task.iscompleted}
      } 
        return task
    })
    setTasks(newTasks)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font bold text-center">Gerenciador de Tarefas</h1>

        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} removeTaskClick={removeTaskClick}/>
      </div>
    </div>
  );
}

export default App;
