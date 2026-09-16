// OJO: en la Clase 4, Task tenía su propio useState("completed").
// Ahora ya NO lo tiene: recibe el objeto "task" completo por props,
// y en lugar de cambiar su propio estado, llama a onToggle/onDelete
// (funciones que en realidad viven en App) pasándole el id de la tarea.
function Task({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <span className={task.completed ? 'task-title completed' : 'task-title'}>
        {task.title}
      </span>

      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Deshacer' : 'Completar'}
        </button>
        <button className="btn-danger" onClick={() => onDelete(task.id)}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Task
