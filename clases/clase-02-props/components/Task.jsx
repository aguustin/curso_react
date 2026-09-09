// "props" es un objeto que React le pasa al componente con los datos
// que recibió al usarlo, por ejemplo: <Task title="Estudiar React" />
//
// Acá usamos destructuring para sacar directamente la propiedad "title":
//   function Task({ title }) { ... }
// es equivalente a:
//   function Task(props) { const title = props.title; ... }
function Task({ title }) {
  return (
    <div className="task-item">
      <span className="task-title">{title}</span>
    </div>
  )
}

export default Task
