import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import QuickAdd from './components/QuickAdd.jsx'
import Footer from './components/Footer.jsx'

const initialTasks = [
  { id: 1, title: 'Estudiar React', completed: false },
  { id: 2, title: 'Lavar los platos', completed: false },
  { id: 3, title: 'Salir a caminar', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  // useEffect ejecuta código DESPUÉS de que React terminó de renderizar.
  // Sirve para "efectos secundarios": cosas que no son parte del render
  // en sí, como cambiar el título de la pestaña del navegador.
  //
  // El segundo argumento, [tasks], es el "array de dependencias":
  // le dice a React "volvé a ejecutar este efecto cada vez que
  // cambie 'tasks'". Si pusiéramos [], se ejecutaría una sola vez,
  // al montar el componente.
  useEffect(() => {
    document.title = `Tareas (${tasks.length})`
  }, [tasks])

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleAddTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <h2>Mis tareas</h2>
        <p>Tenés {tasks.length} tareas.</p>

        <QuickAdd onAddTask={handleAddTask} />

        <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
      </main>

      <Footer />
    </div>
  )
}

export default App
