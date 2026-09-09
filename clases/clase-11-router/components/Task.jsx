function Task({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
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
    </li>
  )
}

export default Task
