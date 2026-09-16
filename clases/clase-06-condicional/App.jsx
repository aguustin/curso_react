import { useState } from 'react'
import Header from './components/Header.jsx'
import Task from './components/Task.jsx'
import Footer from './components/Footer.jsx'

const initialTasks = [
  { id: 1, title: 'Estudiar React' },
  { id: 2, title: 'Lavar los platos' },
  { id: 3, title: 'Salir a caminar' },
]

function App() {
  const [search, setSearch] = useState('')
  const [tasks, setTasks] = useState(initialTasks)
  const [loading, setLoading] = useState(false)

  function handleClearTasks() {
    setTasks([])
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <h2>Mis tareas</h2>

        <input
          type="text"
          placeholder="Buscar tarea..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {/* Botones para poder PROBAR los distintos casos en clase */}
        <button onClick={() => setLoading(!loading)}>
          {loading ? 'Dejar de cargar' : 'Simular carga'}
        </button>
        <button onClick={handleClearTasks}>Vaciar lista</button>

        {/* Caso 1: está cargando -> && solo muestra el <p> si loading es true */}
        {loading && <p>Cargando tareas...</p>}

        {/* Caso 2: no hay tareas */}
        {!loading && tasks.length === 0 && (
          <p className="empty-message">No hay tareas todavía.</p>
        )}

        {/* Caso 3: hay tareas */}
        {!loading &&
          tasks.length > 0 &&
          tasks.map((task) => <Task key={task.id} title={task.title} />)}
      </main>

      <Footer />
    </div>
  )
}

export default App
