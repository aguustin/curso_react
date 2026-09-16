import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import './index.css'

// UserProvider envuelve a toda la app UNA sola vez, acá arriba de
// todo. A partir de ahora, cualquier componente de adentro puede leer
// el usuario logueado con useUser(), sin que nadie se lo pase por props.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
