import { useState } from 'react'
import Header from './components/Header.jsx'
import Task from './components/Task.jsx'
import Footer from './components/Footer.jsx'

function App() {
  // useState devuelve [valorActual, funciónParaCambiarlo]
  // "search" es el estado, "setSearch" es la única forma correcta de modificarlo.
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
        {/* Cuando cambia el estado, React vuelve a renderizar el componente,
            por eso este texto se actualiza solo mientras escribimos */}
        <p>Buscando: {search}</p>

        <Task title="Estudiar React" />
        <Task title="Lavar los platos" />
        <Task title="Salir a caminar" />
      </main>

      <Footer />
    </div>
  )
}

export default App
