import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'
import Footer from './components/Footer.jsx'

const initialTasks = [
  { id: 1, title: 'Estudiar React', completed: false },
  { id: 2, title: 'Lavar los platos', completed: false },
  { id: 3, title: 'Salir a caminar', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
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

  // handleAddTask no cambió: ya la teníamos desde la Clase 7.
  // Lo que cambia es QUIÉN la llama: antes era QuickAdd (un botón fijo),
  // ahora es TaskForm (un formulario real, con su propio input).
  function handleAddTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

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

        <TaskForm onAddTask={handleAddTask} />

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
