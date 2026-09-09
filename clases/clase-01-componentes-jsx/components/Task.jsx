// Todavía no usamos props: el contenido está fijo ("hardcodeado").
// Por eso, si App usa <Task /> tres veces, las tres se ven IGUAL.
// Esto es a propósito: en la Clase 2 vamos a resolver este problema con props.
function Task() {
  return (
    <div className="task-item">
      <span className="task-title">Estudiar React</span>
    </div>
  )
}

export default Task
