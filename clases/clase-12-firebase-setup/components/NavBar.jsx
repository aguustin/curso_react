import { Link } from 'react-router-dom'

// NavBar reemplaza a Header. <Link> es como un <a>, pero NO recarga
// la página: React Router intercepta el clic y solo cambia lo necesario.
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
