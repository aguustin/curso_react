import { useState, useEffect } from 'react'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../firebase/config.js'
import TaskForm from '../components/TaskForm.jsx'
import TaskList from '../components/TaskList.jsx'

// "tareas" es el nombre de la colección en Firestore. Un documento de
// esa colección es, ni más ni menos, un objeto como los que ya
// veníamos guardando en el array a mano desde la Clase 4.
const tasksCollection = collection(db, 'tareas')

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Se reemplaza el fetch a la API de prueba (Clase 9) por una lectura
  // real a Firestore. El patrón es el mismo: loading + error + try/catch/finally,
  // solo cambia de dónde vienen los datos.
  useEffect(() => {
    async function loadTasks() {
      setLoading(true)
      setError(null)

      try {
        const snapshot = await getDocs(tasksCollection)
        const tasksFromDb = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }))
        setTasks(tasksFromDb)
      } catch (err) {
        setError('No se pudieron cargar las tareas')
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  useEffect(() => {
    document.title = `Tareas (${tasks.length})`
  }, [tasks])

  async function handleAddTask(title) {
    const newTask = { title, completed: false }
    const docRef = await addDoc(tasksCollection, newTask)
    setTasks([...tasks, { id: docRef.id, ...newTask }])
  }

  async function handleToggleTask(id) {
    const task = tasks.find((t) => t.id === id)
    const taskRef = doc(db, 'tareas', id)
    await updateDoc(taskRef, { completed: !task.completed })

    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    )
  }

  async function handleDeleteTask(id) {
    const taskRef = doc(db, 'tareas', id)
    await deleteDoc(taskRef)
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <section>
      <h1>Mis tareas</h1>

      {loading && <p>Cargando tareas...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <p>
            Tenés {tasks.length} tareas, {completedCount} completadas.
          </p>

          <TaskForm onAddTask={handleAddTask} />

          <TaskList
            tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        </>
      )}
    </section>
  )
}

export default Tasks
