import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <h1>Bienvenido/a a Mis Tareas</h1>
      <p>Esta es una aplicación simple para practicar React desde cero.</p>
      <p>
        Ir a <Link  to="/tasks">la lista de tareas</Link>.
      </p>
    </section>
  )
}

export default Home
