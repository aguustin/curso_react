// Este componente todavía NO es un formulario real (eso llega en la Clase 10).
// Es una versión mínima para mostrar comunicación hijo -> padre:
// QuickAdd no sabe nada sobre cómo se guardan las tareas,
// simplemente llama a la función que le pasaron por props.
function QuickAdd({ onAddTask }) {
  function handleClick() {
    onAddTask('Nueva tarea de prueba')
  }

  return <button onClick={handleClick}>Agregar tarea de prueba</button>
}

export default QuickAdd
