import { useState, useEffect } from 'react'
import TaskForm from '../components/TaskForm.jsx'
import TaskList from '../components/TaskList.jsx'

// Esta página es, en esencia, el App.jsx de la Clase 10,
// mudado a pages/Tasks.jsx. Se muestra en la ruta "/tasks".
const initialTasks = [
  { id: 1, title: 'Aprender componentes', completed: true },
  { id: 2, title: 'Aprender props', completed: true },
  { id: 3, title: 'Aprender useState', completed: false },
]

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.title = `Tareas (${tasks.length})`
  }, [tasks])

  function handleAddTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

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

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <section>
      <h1>Mis tareas</h1>
      <p>
        Tenés {tasks.length} tareas, {completedCount} completadas.
      </p>

      <TaskForm onAddTask={handleAddTask} />

      <button onClick={handleLoadFromApi} disabled={loading}>
        {loading ? 'Cargando...' : 'Cargar tareas de ejemplo desde la API'}
      </button>

      {error && <p className="error">{error}</p>}

      <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
    </section>
  )
}

export default Tasks
