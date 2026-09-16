import { useState } from 'react'

// TaskForm reemplaza a QuickAdd. Ahora sí es un formulario real:
// - "value={title}" + "onChange" -> input controlado (React maneja el valor,
//   no el DOM). El input SIEMPRE muestra lo que hay en el estado "title".
// - "onSubmit" en el <form>, no "onClick" en el botón: así también
//   funciona si el usuario presiona Enter.
// - event.preventDefault() evita que el navegador recargue la página
//   (comportamiento por defecto de cualquier <form>).
function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    // Validación simple: no agregar tareas vacías.
    if (title.trim() === '') {
      return
    }

    onAddTask(title)
    setTitle('') // limpiamos el input después de agregar
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
