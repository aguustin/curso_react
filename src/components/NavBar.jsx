import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <span className="navbar-title">Mis Tareas</span>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/tasks">Tareas</Link>
        <Link to="/about">Acerca de</Link>
      </div>
    </nav>
  )
}

export default NavBar
