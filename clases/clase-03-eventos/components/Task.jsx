function Task({ title }) {
  // Estas son funciones "manejadoras de eventos" (event handlers).
  function handleComplete() {
    console.log(`Tarea "${title}" marcada como completada`)
  }

  function handleDelete() {
    console.log(`Tarea "${title}" eliminada`)
  }

  return (
    <div className="task-item">
      <span className="task-title">{title}</span>

      <div className="task-actions">
        {/* IMPORTANTE: onClick={handleComplete}, NO onClick={handleComplete()}
            Si le agregamos los paréntesis, la función se ejecutaría
            inmediatamente al renderizar, no cuando el usuario haga clic. */}
        <button onClick={handleComplete}>Completar</button>
        <button className="btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Task
