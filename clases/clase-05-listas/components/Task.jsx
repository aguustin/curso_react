import { useState } from 'react'

function Task({ title }) {
  // Cada Task tiene su PROPIO estado "completed", independiente de las demás.
  const [completed, setCompleted] = useState(false)

  function handleToggle() {
    // NUNCA modificamos "completed" directamente (completed = true).
    // Siempre usamos la función setCompleted que nos dio useState,
    // así React se entera del cambio y vuelve a renderizar.
    setCompleted(!completed)
  }

  return (
    <div className="task-item">
      <span className={completed ? 'task-title completed' : 'task-title'}>
        {title}
      </span>

      <div className="task-actions">
        <button onClick={handleToggle}>
          {completed ? 'Deshacer' : 'Completar'}
        </button>
      </div>
    </div>
  )
}

export default Task
