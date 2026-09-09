import Header from './components/Header.jsx'
import Task from './components/Task.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <h2>Mis tareas</h2>

        {/* Ahora cada <Task> recibe un dato distinto mediante props */}
        <Task title="Estudiar React" />
        <Task title="Lavar los platos" />
        <Task title="Salir a caminar" />
      </main>

      <Footer />
    </div>
  )
}

export default App
