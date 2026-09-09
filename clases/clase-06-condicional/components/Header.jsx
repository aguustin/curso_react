// Un componente es simplemente una función que devuelve JSX.
function Header() {
  return (
    <header className="navbar">
      <h1>Mis Tareas</h1>
      {/* Esto es una expresión de JavaScript dentro de JSX: {} */}
      <p>Hoy es {new Date().toLocaleDateString()}</p>
    </header>
  )
}

export default Header
