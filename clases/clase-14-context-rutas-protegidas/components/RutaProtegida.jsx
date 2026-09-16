import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'

// Envuelve una página: si no hay usuario logueado, redirige a /login.
// Si hay, muestra la página normalmente (children).
function RutaProtegida({ children }) {
  const { user, loadingUser } = useUser()

  if (loadingUser) {
    return <p>Cargando...</p>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default RutaProtegida
