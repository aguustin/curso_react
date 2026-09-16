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
  // Estados típicos de cualquier pantalla que consulta una API:
  // loading (¿está cargando?), error (¿algo salió mal?)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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

  // Flujo: botón -> fetch -> API -> setState -> React vuelve a renderizar.
  // Usamos async/await porque fetch() devuelve una Promise.
  // API usada: JSONPlaceholder (https://jsonplaceholder.typicode.com/).
  // Si esta API dejara de funcionar, se puede reemplazar la URL por
  // cualquier otra que devuelva JSON (ver README, Clase 9).
  async function handleLoadFromApi() {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=5',
      )

      if (!response.ok) {
        throw new Error('No se pudieron cargar las tareas')
      }

      const data = await response.json()

      const apiTasks = data.map((item) => ({
        id: item.id,
        title: item.title,
        completed: item.completed,
      }))

      setTasks([...tasks, ...apiTasks])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <h2>Mis tareas</h2>
        <p>Tenés {tasks.length} tareas.</p>

        <QuickAdd onAddTask={handleAddTask} />

        <button onClick={handleLoadFromApi} disabled={loading}>
          {loading ? 'Cargando...' : 'Cargar tareas de ejemplo desde la API'}
        </button>

        {error && <p className="error">{error}</p>}

        <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
      </main>

      <Footer />
    </div>
  )
}

export default App
