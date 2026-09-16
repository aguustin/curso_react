import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Tasks from './pages/Tasks.jsx'
import TaskDetail from './pages/TaskDetail.jsx'
import About from './pages/About.jsx'

// App ya no tiene la lógica de las tareas: ahora vive en pages/Tasks.jsx.
// App pasa a ser el "layout": arma NavBar + Footer siempre visibles,
// y en el medio decide qué página mostrar según la URL.
//
// <Routes> mira la URL actual y renderiza el <Route> que coincida.
// <Route path="/tasks/:id" ...> tiene un parámetro dinámico ":id".
function App() {
  return (
    <div className="app">
      <NavBar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
