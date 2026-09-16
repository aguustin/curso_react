import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// Página nueva: se muestra en la ruta "/tasks/:id"
// useParams() lee el valor real que quedó en la URL en lugar de ":id".
// Por ejemplo, en /tasks/3, useParams() devuelve { id: "3" }.
//
// Importante (limitación a propósito, para no usar Context): esta página
// NO comparte estado con pages/Tasks.jsx. En vez de eso, pide el dato
// directamente a la API por su id. Es una simplificación pensada para
// el curso; en una app real se resolvería con Context, una base de datos,
// o levantando el detalle desde el mismo array de tasks.
function TaskDetail() {
  const { id } = useParams()
  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchTask() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
        )

        if (!response.ok) {
          throw new Error('Tarea no encontrada')
        }

        const data = await response.json()
        setTask(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTask()
  }, [id])

  if (loading) {
    return <p>Cargando tarea...</p>
  }

  if (error) {
    return <p className="error">{error}</p>
  }

  return (
    <section>
      <h1>Detalle de tarea #{task.id}</h1>
      <p>{task.title}</p>
      <p>Estado: {task.completed ? 'Completada' : 'Pendiente'}</p>
      <Link to="/tasks">Volver a tareas</Link>
    </section>
  )
}

export default TaskDetail
