import Header from './components/Header.jsx'
import Task from './components/Task.jsx'
import Footer from './components/Footer.jsx'

// App es el componente principal. Importa y usa otros componentes,
// tal como ya venían haciendo con Vite.
function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <h2>Mis tareas</h2>

        {/* Todavía no tenemos una lista de datos: repetimos el componente a mano */}
        <Task />
        <Task />
        <Task />
      </main>

      <Footer />
    </div>
  )
}

export default App
