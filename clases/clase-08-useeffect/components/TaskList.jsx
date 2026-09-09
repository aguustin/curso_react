import Task from './Task.jsx'

// TaskList es un componente "intermedio": recibe tasks/onToggle/onDelete
// de App y se los vuelve a pasar a cada Task. No los usa él mismo,
// solo los transporta hacia abajo.
function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No hay tareas todavía.</p>
  }

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TaskList
