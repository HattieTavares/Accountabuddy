import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
  const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Learn React",
            "other": "no-show",
            "day": "Monday",
            "reminder": false
          },
          {
            "id": 2,
            "text": "Build React App",
            "day": "Wednesday",
            "reminder": true
          },
          {
            "id": 3,
            "text": "Profit",
            "day": "Friday",
            "reminder": true
          }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log(id)
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks"}
    </div>
  )
}

export default App
