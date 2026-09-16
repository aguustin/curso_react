import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config.js'
import { useUser } from '../context/UserContext.jsx'

// NavBar ya no recibe "user" por props (comparar con la Clase 13):
// lo lee directo del contexto con useUser().
function NavBar() {
  const { user } = useUser()
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut(auth)
    navigate('/')
  }

  return (
    <nav className="navbar">
      <span className="navbar-title">Mis Tareas</span>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/tasks">Tareas</Link>
        <Link to="/about">Acerca de</Link>
        {user ? (
          <>
            <span className="navbar-user">{user.email}</span>
            <button className="btn-link" onClick={handleLogout}>
              Salir
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Ingresar</Link>
            <Link to="/registro">Registrarme</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar
