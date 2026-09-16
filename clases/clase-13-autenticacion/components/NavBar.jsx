import { Link } from 'react-router-dom'

// NavBar ahora recibe "user" por props para saber si hay sesión
// iniciada. Es el ejemplo más simple del "dolor" de pasar props:
// NavBar no usa el usuario para nada más que mostrarlo, pero tiene
// que recibirlo igual desde App.
function NavBar({ user }) {
  return (
    <nav className="navbar">
      <span className="navbar-title">Mis Tareas</span>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/tasks">Tareas</Link>
        <Link to="/about">Acerca de</Link>
        {user ? (
          <span className="navbar-user">{user.email}</span>
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
