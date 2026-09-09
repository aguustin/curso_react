import { useState } from 'react'
import Header from './components/Header.jsx'
import Task from './components/Task.jsx'
import Footer from './components/Footer.jsx'

// En vez de escribir <Task /> tres veces a mano, ahora los datos
// viven en un array de objetos.
const initialTasks = [
  { id: 1, title: 'Estudiar React' },
  { id: 2, title: 'Lavar los platos' },
  { id: 3, title: 'Salir a caminar' },
]

function App() {
  const [search, setSearch] = useState('')

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
        <p>Buscando: {search}</p>

        {/* .map() transforma cada objeto del array en un componente <Task />.
            "key" es obligatorio: le sirve a React para identificar cada
            elemento de la lista y saber cuál cambió, se agregó o se eliminó. */}
        {initialTasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default App
