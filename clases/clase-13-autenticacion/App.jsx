import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Tasks from './pages/Tasks.jsx'
import TaskDetail from './pages/TaskDetail.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

// El usuario logueado se guarda acá, en el componente más alto, y se
// pasa por props a quien lo necesite (NavBar, Login). Es el mismo
// "lifting state up" de la Clase 7, aplicado a rutas. Ya se puede
// sentir el problema: cuantas más pantallas necesiten el usuario, más
// props hay que ir pasando de componente en componente. Ese dolor es
// justo lo que resuelve Context API en la Clase 14.
function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="app">
      <NavBar user={user} />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/registro" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
