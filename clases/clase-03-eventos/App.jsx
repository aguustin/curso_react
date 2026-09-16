import Header from './components/Header.jsx'
import Task from './components/Task.jsx'
import Footer from './components/Footer.jsx'

function App() {
  // Todavía NO usamos useState. Esta función se ejecuta al escribir,
  // pero como no guardamos el valor en ningún lado, no vemos nada en pantalla.
  // Eso es justamente lo que vamos a resolver en la Clase 4 con useState.
  function handleSearchChange(event) {
    console.log('Buscando:', event.target.value)
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <h2>Mis tareas</h2>

        <input
          type="text"
          placeholder="Buscar tarea..."
          onChange={handleSearchChange}
        />

        <Task title="Estudiar React" />
        <Task title="Lavar los platos" />
        <Task title="Salir a caminar" />
      </main>

      <Footer />
    </div>
  )
}

export default App
