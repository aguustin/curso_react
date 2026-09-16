import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config.js'

// Mismo patrón de formulario controlado de la Clase 10 (TaskForm):
// cada input tiene su propio useState, y el submit hace una sola cosa.
function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      // Si el registro sale bien, mandamos al usuario a la app.
      navigate('/tasks')
    } catch (err) {
      setError('No se pudo crear la cuenta. Revisá el email y la contraseña.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="auth-page">
      <h1>Crear cuenta</h1>

      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Creando cuenta...' : 'Registrarme'}
        </button>
      </form>

      <p>
        ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
      </p>
    </section>
  )
}

export default Register
