import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'
import Home from './pages/Home.jsx'
import Tasks from './pages/Tasks.jsx'
import TaskDetail from './pages/TaskDetail.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

// App ya no tiene useState(user) ni se lo pasa a nadie por props: el
// usuario vive en UserContext (ver context/UserContext.jsx) y cada
// componente que lo necesita lo lee directamente con useUser().
// Comparar con la Clase 13: NavBar y Login ya no reciben "user" ni
// "onLogin" por props.
function App() {
  return (
    <div className="app">
      <NavBar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tasks"
            element={
              <RutaProtegida>
                <Tasks />
              </RutaProtegida>
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <RutaProtegida>
                <TaskDetail />
              </RutaProtegida>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
