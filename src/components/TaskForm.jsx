import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (title.trim() === '') {
      return
    }

    onAddTask(title)
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default TaskForm
