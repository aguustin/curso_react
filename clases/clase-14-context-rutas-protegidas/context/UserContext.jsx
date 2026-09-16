import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config.js'

// 1. Se crea el contexto. Empieza en null: "todavía no sabemos si hay
//    usuario o no".
const UserContext = createContext(null)

// 2. Este componente "envuelve" a toda la app (se usa una sola vez, en
//    main.jsx) y es el único lugar donde vive el useState del usuario.
export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true)

  // onAuthStateChanged avisa, en tiempo real, si hay sesión activa o
  // no — incluida la primera vez que se carga la página (por eso ya
  // no hace falta guardar nada "a mano" en el login: Firebase Auth
  // recuerda la sesión solo).
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoadingUser(false)
    })

    // función de limpieza (Clase 8): deja de escuchar si el
    // componente se desmonta.
    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={{ user, loadingUser }}>
      {children}
    </UserContext.Provider>
  )
}

// 3. Este hook es solo un atajo para no tener que escribir
//    "useContext(UserContext)" en cada componente que lo necesite.
export function useUser() {
  return useContext(UserContext)
}
