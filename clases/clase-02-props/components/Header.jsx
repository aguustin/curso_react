function Header() {
  return (
    <header className="navbar">
      <h1>Mis Tareas</h1>
      <p>Hoy es {new Date().toLocaleDateString()}</p>
    </header>
  )
}

export default Header
