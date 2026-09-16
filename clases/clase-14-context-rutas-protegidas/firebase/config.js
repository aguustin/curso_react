import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Los datos de configuración NO se escriben a mano acá: vienen de
// variables de entorno (archivo .env en la raíz del proyecto), para no
// subir claves al repositorio. Vite solo expone al código del cliente
// las variables que empiezan con el prefijo VITE_.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

// Se exportan ya inicializados: el resto de la app solo importa "db"
// y "auth", sin necesitar saber cómo se configuró Firebase por dentro.
export const db = getFirestore(app)
export const auth = getAuth(app)
