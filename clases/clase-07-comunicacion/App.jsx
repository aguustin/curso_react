import { useState } from 'react'
import Header from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import QuickAdd from './components/QuickAdd.jsx'
import Footer from './components/Footer.jsx'

// Ahora "completed" ya no vive dentro de cada Task (como en la Clase 4):
// lo subimos a App. Esto se llama "lifting state up" (subir el estado):
// App es el único que sabe la verdad sobre las tareas, y sus hijos
// (TaskList -> Task) solo la reciben por props y avisan los cambios
// llamando a funciones que también reciben por props.
const initialTasks = [
  { id: 1, title: 'Estudiar React', completed: false },
  { id: 2, title: 'Lavar los platos', completed: false },
  { id: 3, title: 'Salir a caminar', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  // Padre -> hijo: esta función se pasa como prop hacia abajo.
  // Hijo -> padre: Task la va a EJECUTAR cuando el usuario haga clic,
  // y así "avisa" a App que algo cambió.
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

        {/* QuickAdd es hijo de App. App le pasa handleAddTask por props.
            QuickAdd NO sabe cómo se agregan tareas, solo avisa "agregá esta". */}
        <QuickAdd onAddTask={handleAddTask} />

        <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
      </main>

      <Footer />
    </div>
  )
}

export default App
