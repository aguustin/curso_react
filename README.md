# Mis Tareas — Proyecto guía para enseñar React desde cero

App de tareas (to-do) pensada como **hilo conductor de un curso de React**, dividida en
13 clases que se van sumando una sobre la otra. Cada clase agrega **un solo concepto
nuevo** sobre el código de la clase anterior.

Está pensado para alumnos que ya saben HTML/CSS/JS básico, instalar Node/npm, crear un
proyecto con Vite, crear componentes e importarlos en `App.jsx`.

## Reglas del proyecto

Solo se usa: React, JSX, JavaScript básico, CSS básico, Vite, `useState`, `useEffect`,
`fetch`, y React Router (recién en la Clase 11).

**No se usa** (a propósito, para no anticipar conceptos): Context API, `useReducer`,
`useMemo`, `useCallback`, Redux, Zustand, custom hooks, testing, TypeScript, Axios,
Tailwind/Bootstrap/Material UI, React Query, ni ninguna otra librería o patrón avanzado.

## Cómo usar este repositorio

- **`src/`** → el proyecto **final** (Clase 12/13), completo y funcionando.
- **`clases/clase-01-...` a `clases/clase-11-router/`** → una "foto" (checkpoint) del
  proyecto al final de cada clase. Cada carpeta es **autocontenida**: podés borrar el
  contenido de `src/` y pegar el de `clases/clase-0X-.../` para volver exactamente al
  estado de esa clase (todas compilan: fueron probadas con `vite build`).
- El archivo `index.css` es el mismo en todas las clases (no cambia: no es un concepto
  de React), así que no hace falta explicarlo de nuevo en cada clase.
- Para dar una clase: mostrá el checkpoint de la clase anterior, y en vivo modificá el
  código hasta llegar al checkpoint de la clase actual.

## Roadmap de clases

**Fase 1 — Fundamentos de React (Clases 1 a 11):**

| Clase | Tema | Conceptos | Resultado |
|---|---|---|---|
| 1 | Componentes + JSX | función componente, JSX, expresiones `{}` | Se ve la app con tareas fijas (hardcodeadas) |
| 2 | Props | props, destructuring, reutilización | Cada tarea muestra un título distinto |
| 3 | Eventos | `onClick`, `onChange`, handlers | Los botones e inputs reaccionan (por consola) |
| 4 | useState | estado, `setState`, re-render | Se puede marcar una tarea como completada |
| 5 | Listas | `.map()`, `key` | Las tareas vienen de un array, no están a mano |
| 6 | Condicionales | `if`, ternario, `&&` | Casos: sin tareas / cargando / con tareas |
| 7 | Comunicación entre componentes | lifting state up, callbacks por props | Agregar/completar/eliminar desde `App` |
| 8 | useEffect | efectos secundarios, dependency array | El título de la pestaña muestra la cantidad de tareas |
| 9 | Fetch / API | `fetch`, `async/await`, loading/error | Se pueden cargar tareas desde una API real |
| 10 | Formularios | input controlado, `onSubmit`, validación | Formulario real para agregar tareas |
| 11 | React Router | `BrowserRouter`, `Routes`, `Link`, `useParams` | Home / Tareas / Detalle / Acerca de, con URLs propias |

**Fase 2 — Proyecto integrador: gestor de tareas tipo Trello (Clases 12 a 24).**
Mismo criterio que la Fase 1: se parte del checkpoint anterior y se agrega de a
un concepto/funcionalidad por clase. No todas las clases suman un concepto 100%
nuevo de React — varias aplican patrones ya vistos (CRUD, condicionales, listas)
sobre un dominio nuevo. Backend: **Firebase** (Firestore + Auth). Context API
se introduce en la Clase 14 para el usuario logueado (después de sentir el
problema de pasarlo por props en la Clase 13) — pero nada de Redux/Zustand,
ni librerías de UI: el diseño visual se resuelve con IA.

| Clase | Tema | Qué se agrega |
|---|---|---|
| 12 | Firebase setup | Proyecto de Firebase, Firestore, variables de entorno. `Tasks.jsx` pasa a leer/escribir en Firestore en vez de la API de prueba |
| 13 | Autenticación | Registro/login con Firebase Auth (formulario controlado, Clase 10). Usuario por props, a propósito, para sentir el problema |
| 14 | Context API + Rutas protegidas | `createContext`/`Provider`/`useContext` para resolver el prop drilling de la Clase 13. `onAuthStateChanged`, rutas protegidas con `<Navigate>` |
| 15 | Proyectos | CRUD de proyectos — la "tarea global" a desarrollar |
| 16 | Categorías | CRUD de categorías dentro de un proyecto (columnas del tablero) |
| 17 | Tareas | CRUD de tareas (título + descripción) dentro de una categoría |
| 18 | Estado, progreso y color | Campos `estado`, `progreso` y `color` en la tarea, condicionales |
| 19 | Mover y eliminar | Cambiar de categoría con un `<select>`, eliminar tareas |
| 20 | Asignar usuarios a tareas | Colección `usuarios`, selector de personas, rol y trabajo |
| 21 | Subtareas | CRUD básico de subtareas dentro del detalle de una tarea |
| 22 | Asignar usuarios a subtareas | Mismo patrón de la Clase 20, un nivel más abajo |
| 23 | Pulido | Loading/error de Firebase, estados vacíos, consistencia general |
| 24 | Cierre y deploy | Deploy (Vercel + Firebase), checklist de portfolio. Bonus si sobra tiempo: drag & drop |

Ver el detalle completo de decisiones de arquitectura y modelo de datos de la
Fase 2 en `roadmap_proyecto_gestor_tareas.pdf` (fuera de este repositorio).

## Estructura de carpetas (proyecto final)

```text
tasks_project/
├── .env.example                   <- plantilla de variables de entorno (Clase 12+)
├── index.html
├── package.json
├── vite.config.js
├── clases/                        <- checkpoints de cada clase (ver arriba)
│   ├── clase-01-componentes-jsx/
│   ├── clase-02-props/
│   ├── ...
│   └── clase-14-context-rutas-protegidas/
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── firebase/
    │   └── config.js              <- inicialización de Firebase (Clase 12+)
    ├── context/
    │   └── UserContext.jsx        <- usuario logueado, vía Context API (Clase 14+)
    ├── components/
    │   ├── NavBar.jsx
    │   ├── RutaProtegida.jsx      <- protege rutas según sesión (Clase 14+)
    │   ├── Task.jsx
    │   ├── TaskList.jsx
    │   ├── TaskForm.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        ├── Tasks.jsx
        ├── TaskDetail.jsx
        ├── About.jsx
        ├── Login.jsx               <- Clase 13+
        └── Register.jsx            <- Clase 13+
```

No hay carpetas `services/`, `utils/` a propósito: no son necesarias para lo
que se enseña en este curso. `context/` es la única excepción a "sin
Context API" y se introduce recién en la Clase 14, después de sentir el
problema que resuelve.

---

## Clase 1 — Componentes + JSX

**Objetivo:** que los alumnos vean un componente funcionando y entiendan qué es JSX.

**Conceptos a explicar:**
- Un componente es una función que devuelve JSX.
- JSX se parece a HTML pero es JavaScript (por eso `className` en vez de `class`).
- Cómo importar (`import Task from './components/Task.jsx'`) y usar (`<Task />`) un componente.
- Expresiones de JavaScript dentro de JSX con `{}` (ej: `{new Date().toLocaleDateString()}`).

**Archivos a crear:** `src/App.jsx`, `src/components/Header.jsx`, `src/components/Task.jsx`,
`src/components/Footer.jsx`. Ver `clases/clase-01-componentes-jsx/`.

**Código para mostrar:**

```jsx
function Task() {
  return (
    <div className="task-item">
      <span className="task-title">Estudiar React</span>
    </div>
  )
}
```

```jsx
function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Task />
        <Task />
        <Task />
      </main>
      <Footer />
    </div>
  )
}
```

**Ejercicio práctico:** crear un cuarto componente `Motivacion.jsx` que muestre una
frase fija, e importarlo en `App.jsx`.

**Errores comunes:**
- Escribir `class` en vez de `className`.
- Olvidarse de exportar el componente (`export default Task`).
- Olvidarse de cerrar etiquetas (JSX exige que todo tag se cierre, incluso `<img />`).
- Un componente que devuelve dos elementos "hermanos" sin envolverlos en un solo tag padre.

**Preguntas para la clase:**
- ¿Por qué las tres `<Task />` se ven todas iguales?
- ¿Qué pasaría si escribimos `<task />` en minúscula?

**Qué NO explicar todavía:** props, estado, eventos, listas, fetch, router. Ni
mencionar que "esto se puede resolver con props" — dejar que la repetición moleste,
para que la Clase 2 tenga sentido.

**Antes de pasar a la Clase 2, deberían poder:** crear un componente, importarlo,
usarlo varias veces, y escribir una expresión JS simple dentro de `{}`.

---

## Clase 2 — Props

**Objetivo:** resolver el problema de la Clase 1: que cada `<Task />` muestre algo distinto.

**Conceptos a explicar:**
- Qué son las props: datos que un componente padre le pasa a un hijo.
- Cómo pasarlas: `<Task title="Estudiar React" />`.
- Cómo recibirlas con destructuring: `function Task({ title })`.
- Reutilización: el mismo componente, con datos distintos.

**Archivos a modificar:** `src/App.jsx`, `src/components/Task.jsx`.
Ver `clases/clase-02-props/`.

**Código para mostrar:**

```jsx
<Task title="Estudiar React" />
<Task title="Lavar los platos" />
<Task title="Salir a caminar" />
```

```jsx
function Task({ title }) {
  return (
    <div className="task-item">
      <span className="task-title">{title}</span>
    </div>
  )
}
```

**Ejercicio práctico:** agregar una prop `autor` a `Header` y mostrarla (ej.
`<Header autor="Profe" />` → "Curso dado por Profe").

**Errores comunes:**
- Escribir `function Task(props)` y después usar `title` directamente sin `props.title`
  ni destructuring (queda `undefined`).
- Pasar la prop con un nombre y leerla con otro (`<Task titulo="..." />` pero `{ title }`).
- Intentar modificar una prop dentro del componente hijo (las props son de solo lectura).

**Preguntas para la clase:**
- ¿Quién "decide" el valor de `title`: `Task` o `App`?
- ¿Qué pasa si no le paso ninguna prop a `<Task />`?

**Qué NO explicar todavía:** estado (`useState`), eventos, comunicación hijo → padre.

**Antes de pasar a la Clase 3, deberían poder:** pasar y recibir props, y explicar con
sus palabras la diferencia entre "props" y "contenido fijo".

---

## Clase 3 — Eventos

**Objetivo:** que los componentes reaccionen a acciones del usuario (todavía sin cambiar
nada visible en pantalla).

**Conceptos a explicar:**
- Eventos en React: `onClick`, `onChange`, `onSubmit`.
- Un event handler es una función común.
- Diferencia entre **pasar una función** (`onClick={handleComplete}`) y **ejecutarla**
  (`onClick={handleComplete()}`) — el segundo la dispara inmediatamente al renderizar.

**Archivos a modificar:** `src/components/Task.jsx`, `src/App.jsx`.
Ver `clases/clase-03-eventos/`.

**Código para mostrar:**

```jsx
function Task({ title }) {
  function handleComplete() {
    console.log(`Tarea "${title}" marcada como completada`)
  }

  return (
    <div className="task-item">
      <span className="task-title">{title}</span>
      <button onClick={handleComplete}>Completar</button>
    </div>
  )
}
```

**Ejercicio práctico:** agregar un botón "Eliminar" con su propio handler que haga
`console.log` de un mensaje distinto.

**Errores comunes:**
- Poner paréntesis de más: `onClick={handleComplete()}`.
- Esperar que algo cambie visualmente en pantalla (todavía no hay estado: es normal
  que solo se vea en la consola).
- Confundir `onChange` (input) con `onClick` (botón).

**Preguntas para la clase:**
- ¿Por qué no vemos ningún cambio en la pantalla al hacer clic?
- ¿Qué mostraría la consola si agrego `onClick={handleComplete()}` en vez de
  `onClick={handleComplete}`?

**Qué NO explicar todavía:** `useState`. Es tentador mostrar cómo "arreglar" que no se
vea nada, pero hay que dejar esa necesidad pendiente para la Clase 4.

**Antes de pasar a la Clase 4, deberían poder:** escribir un handler y conectarlo a un
evento, y explicar por qué `console.log` funciona pero la pantalla no cambia.

---

## Clase 4 — useState

**Objetivo:** que el clic en "Completar" produzca un cambio visible.

**Conceptos a explicar:**
- Qué es el estado: datos que, al cambiar, hacen que el componente se vuelva a
  renderizar.
- Por qué existe: sin estado, React no sabe que algo cambió y no vuelve a dibujar nada.
- `const [completed, setCompleted] = useState(false)`.
- Por qué **nunca** se modifica el estado directamente (`completed = true`): React no
  se entera del cambio y no re-renderiza.
- Cambio de estado → nuevo render (sin explicar todavía el ciclo interno de React).

**Archivos a modificar:** `src/components/Task.jsx`, `src/App.jsx` (input de búsqueda
con estado). Ver `clases/clase-04-usestate/`.

**Código para mostrar:**

```jsx
function Task({ title }) {
  const [completed, setCompleted] = useState(false)

  function handleToggle() {
    setCompleted(!completed)
  }

  return (
    <div className="task-item">
      <span className={completed ? 'task-title completed' : 'task-title'}>
        {title}
      </span>
      <button onClick={handleToggle}>
        {completed ? 'Deshacer' : 'Completar'}
      </button>
    </div>
  )
}
```

**Ejercicio práctico:** agregar un contador simple (`const [count, setCount] =
useState(0)`) con un botón "+1" en cualquier componente, para practicar `useState`
fuera del contexto de tareas.

**Errores comunes:**
- Escribir `completed = true` en vez de `setCompleted(true)`.
- Esperar que el cambio de estado sea "inmediato" dentro de la misma función (el
  estado nuevo se ve en el **próximo** render, no en la misma línea de código).
- Declarar el `useState` fuera del componente.

**Preguntas para la clase:**
- ¿Por qué cada `<Task>` tiene su propio "completado", independiente de las otras?
- ¿Qué pasaría si en vez de `setCompleted(!completed)` escribiéramos
  `completed = !completed`?

**Qué NO explicar todavía:** que el estado se puede "subir" a un componente padre
(lifting state up) — eso es la Clase 7. Por ahora cada `Task` maneja el suyo.

**Antes de pasar a la Clase 5, deberían poder:** declarar un estado, modificarlo con su
setter, y explicar por qué el cambio se ve en pantalla.

---

## Clase 5 — Listas

**Objetivo:** dejar de escribir `<Task title="..." />` a mano y generar la lista desde
un array de datos.

**Conceptos a explicar:**
- Un array de objetos representa los datos reales de la aplicación.
- `array.map(...)` transforma cada dato en un elemento JSX.
- `key`: por qué es obligatorio (ayuda a React a identificar qué elemento cambió,
  se agregó o se eliminó) y por qué debe ser **estable** (usar el `id`, no el índice
  si se puede evitar).

**Archivos a modificar:** `src/App.jsx`. Ver `clases/clase-05-listas/`.

**Código para mostrar:**

```jsx
const initialTasks = [
  { id: 1, title: 'Estudiar React' },
  { id: 2, title: 'Lavar los platos' },
  { id: 3, title: 'Salir a caminar' },
]

function App() {
  return (
    <main>
      {initialTasks.map(task => (
        <Task key={task.id} title={task.title} />
      ))}
    </main>
  )
}
```

**Ejercicio práctico:** agregar dos tareas más al array `initialTasks` y comprobar que
aparecen solas, sin tocar el JSX.

**Errores comunes:**
- Olvidarse del `key`.
- Usar el índice del array como `key` cuando los elementos pueden reordenarse o
  eliminarse (puede traer bugs sutiles más adelante).
- Poner el `key` en el elemento de adentro en vez de en el elemento que devuelve el `.map()`.

**Preguntas para la clase:**
- ¿Qué pasa en la consola si sacamos el `key`?
- ¿Por qué usamos `task.id` y no la posición en el array?

**Qué NO explicar todavía:** eliminar o agregar tareas de forma interactiva (todavía
`initialTasks` es fijo). Eso llega en la Clase 7.

**Antes de pasar a la Clase 6, deberían poder:** transformar un array en una lista de
componentes con `.map()` y explicar para qué sirve `key`.

---

## Clase 6 — Renderizado condicional

**Objetivo:** mostrar cosas distintas según el estado de la aplicación.

**Conceptos a explicar:**
- `if` dentro de la función del componente (antes del `return`).
- Operador ternario: `condicion ? A : B`.
- Operador `&&`: `condicion && A` (solo renderiza `A` si `condicion` es verdadera).
- Casos típicos: no hay tareas, hay tareas, tarea completada, "cargando".

**Archivos a modificar:** `src/App.jsx`. Ver `clases/clase-06-condicional/`.

**Código para mostrar:**

```jsx
{loading && <p>Cargando tareas...</p>}

{!loading && tasks.length === 0 && (
  <p className="empty-message">No hay tareas todavía.</p>
)}

{!loading && tasks.length > 0 &&
  tasks.map(task => <Task key={task.id} title={task.title} />)}
```

```jsx
<span className={completed ? 'task-title completed' : 'task-title'}>
```

**Ejercicio práctico:** agregar un mensaje que diga "¡Buen trabajo!" solo cuando
`tasks.length === 0` después de haber vaciado la lista con el botón "Vaciar lista".

**Errores comunes:**
- Usar `&&` con un número que puede ser `0` (por ejemplo `{tasks.length &&
  <Lista />}` renderiza literalmente un `0` en pantalla cuando la lista está vacía).
  Por eso en este proyecto se usa `tasks.length > 0`, no `tasks.length`.
- Anidar demasiados ternarios y que el JSX se vuelva ilegible: si hay más de dos
  casos, mejor usar `if` antes del `return`.

**Preguntas para la clase:**
- ¿Qué se ve en pantalla si `loading` y `tasks.length === 0` son verdaderos al mismo tiempo?
- ¿Por qué usamos `tasks.length > 0` en vez de `tasks.length` directamente en el `&&`?

**Qué NO explicar todavía:** de dónde viene realmente el estado `loading` (fetch real)
— por ahora se simula con un botón. Eso llega en la Clase 9.

**Antes de pasar a la Clase 7, deberían poder:** elegir entre `if`, ternario y `&&`
según el caso, y explicar la "trampa" del `&&` con `0`.

---

## Clase 7 — Comunicación entre componentes

**Objetivo:** que agregar, completar y eliminar tareas funcione de verdad, coordinado
desde un solo lugar.

**Conceptos a explicar:**
- **Padre → hijo:** ya lo vimos (props, Clase 2).
- **Hijo → padre:** el padre define una función y se la pasa al hijo por props; el
  hijo la ejecuta cuando corresponde (por ejemplo, en un `onClick`).
- **Lifting state up** (subir el estado): si dos componentes necesitan la misma
  información, ese estado se mueve al ancestro común más cercano. Por eso `completed`
  deja de vivir en `Task` (Clase 4) y pasa a vivir en `App`.

```text
App                      (tiene el estado "tasks" y las funciones para modificarlo)
 ├── QuickAdd             (recibe onAddTask)
 └── TaskList             (recibe tasks, onToggle, onDelete)
      └── Task            (recibe task, onToggle, onDelete)
```

**Archivos a crear/modificar:** `src/App.jsx`, `src/components/TaskList.jsx` (nuevo),
`src/components/QuickAdd.jsx` (nuevo, versión provisoria sin formulario real),
`src/components/Task.jsx` (deja de tener su propio estado). Ver
`clases/clase-07-comunicacion/`.

**Código para mostrar:**

```jsx
// App.jsx
function handleToggleTask(id) {
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  ))
}
```

```jsx
// Task.jsx — ya no tiene useState propio
function Task({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <span>{task.title}</span>
      <button onClick={() => onToggle(task.id)}>Completar</button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  )
}
```

**Ejercicio práctico:** agregar un botón "Completar todas" en `App` que recorra
`tasks` con `.map()` y ponga `completed: true` en todas.

**Errores comunes:**
- Llamar a la función directamente en vez de pasarla: `onClick={onDelete(task.id)}`
  en vez de `onClick={() => onDelete(task.id)}` (se ejecuta apenas se renderiza y
  además `onDelete(task.id)` no devuelve una función, así que además falla).
- Modificar el array de tareas directamente (`tasks.push(...)`) en vez de crear uno
  nuevo con spread (`[...tasks, newTask]`).
- Olvidarse de bajar `onToggle`/`onDelete` un nivel (de `App` a `TaskList`, de
  `TaskList` a `Task`).

**Preguntas para la clase:**
- ¿Quién sabe realmente si una tarea está completada: `Task`, `TaskList` o `App`?
- ¿Por qué `TaskList` no hace nada con `onToggle`, solo lo "pasa para abajo"?

**Qué NO explicar todavía:** Context API (aunque la pregunta "¿no sería más fácil
compartir esto sin pasar tantas props?" seguramente va a salir — es un buen momento
para decir que existe una solución para eso, pero que no la vamos a usar en este
curso).

**Antes de pasar a la Clase 8, deberían poder:** explicar con sus palabras qué es
"lifting state up" y seguir el camino de una función desde que se define en `App`
hasta que se ejecuta en `Task`.

---

## Clase 8 — useEffect

**Objetivo:** ejecutar código en respuesta a que algo haya cambiado, sin que sea parte
del render.

**Conceptos a explicar:**
- Qué problema resuelve: hay cosas (cambiar el título de la pestaña, pedir datos a una
  API, etc.) que no son "parte de lo que se dibuja" y no deberían ir directo en el
  cuerpo del componente.
- Qué es un efecto secundario ("side effect"): código que afecta algo fuera de React
  (el DOM, `document.title`, una petición de red).
- `useEffect(() => { ... }, [])`: el array de dependencias.
- Cuándo se ejecuta: después del render; con `[]` se ejecuta una sola vez (al montar);
  con `[tasks]` se ejecuta cada vez que `tasks` cambia.

**Archivos a modificar:** `src/App.jsx`. Ver `clases/clase-08-useeffect/`.

**Código para mostrar:**

```jsx
useEffect(() => {
  document.title = `Tareas (${tasks.length})`
}, [tasks])
```

**Ejercicio práctico:** agregar un `useEffect` con `console.log('La app se montó')` y
`[]` como dependencias, y comprobar que se ejecuta una sola vez aunque se agreguen o
eliminen tareas.

**Errores comunes:**
- Olvidarse el array de dependencias (el efecto se ejecuta después de **cada** render,
  no solo cuando cambia lo que nos interesa).
- Poner un array de dependencias incompleto (por ejemplo `[]` cuando el efecto usa
  `tasks`) — React (con el linter de hooks) suele avisarlo, y vale la pena mostrar ese
  warning en la consola.
- Confundir "efecto" con "evento": un evento pasa por una acción del usuario
  (`onClick`), un efecto pasa por un cambio en el render.

**Preguntas para la clase:**
- ¿Qué pasaría si sacamos el segundo argumento (`[tasks]`) del `useEffect`?
- ¿Por qué no ponemos `document.title = ...` directamente en el `return` del componente?

**Qué NO explicar todavía:** patrones más avanzados de `useEffect` (cleanup functions,
múltiples efectos coordinados, `useMemo`/`useCallback` para optimizar). Alcanza con
el caso simple de "cuando cambia esto, hacé esto otro".

**Antes de pasar a la Clase 9, deberían poder:** explicar para qué sirve el array de
dependencias y escribir un `useEffect` simple.

---

## Clase 9 — Fetch / API

**Objetivo:** traer datos reales desde una API pública en vez de tenerlos siempre
hardcodeados.

**Conceptos a explicar:**
- El flujo completo:

```text
Componente
   ↓
useEffect / evento (botón)
   ↓
fetch()
   ↓
API (JSONPlaceholder)
   ↓
await response.json()
   ↓
setState(data)
   ↓
nuevo render
```

- `fetch()` devuelve una `Promise`; con `async/await` se lee de forma parecida a
  código síncrono.
- Estados típicos de cualquier pantalla que consume una API: `loading`, `error`, datos.
- `try / catch / finally` para manejar errores de red o de la API.

**API usada:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/) —
`GET https://jsonplaceholder.typicode.com/todos?_limit=5`. Es pública, gratuita y no
requiere API key. **Si en algún momento deja de funcionar**, se puede reemplazar solo
la URL dentro de `handleLoadFromApi` por cualquier otra API pública que devuelva JSON
(por ejemplo `https://dummyjson.com` o similares) — el resto del código (loading,
error, `.map()` para adaptar los datos) no cambia.

**Archivos a modificar:** `src/App.jsx`. Ver `clases/clase-09-fetch/`.

**Código para mostrar:**

```jsx
async function handleLoadFromApi() {
  setLoading(true)
  setError(null)

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')

    if (!response.ok) {
      throw new Error('No se pudieron cargar las tareas')
    }

    const data = await response.json()
    setTasks([...tasks, ...data.map(item => ({
      id: item.id, title: item.title, completed: item.completed,
    }))])
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}
```

**Ejercicio práctico:** cambiar `_limit=5` por `_limit=3` y comprobar que trae menos
tareas; después probar qué pasa si se corta el internet (o se cambia la URL a una
inválida) y ver el mensaje de error en pantalla.

**Errores comunes:**
- Olvidarse de `await` antes de `response.json()`.
- No revisar `response.ok` y tratar un error 404/500 como si fuera una respuesta
  válida.
- Dejar `loading` en `true` para siempre por olvidarse del `finally`.
- Poner `async` directamente en la función que pasa a `useEffect` (no está permitido;
  por eso en `TaskDetail.jsx`, Clase 11, se define una función `async` **adentro**
  del `useEffect` y se la llama).

**Preguntas para la clase:**
- ¿Qué se ve en pantalla mientras se espera la respuesta de la API?
- ¿Qué pasa si la API tarda mucho o no responde?

**Qué NO explicar todavía:** Axios, React Query, caching, reintentos automáticos,
cancelación de requests. `fetch` + `async/await` alcanza para todo este curso.

**Antes de pasar a la Clase 10, deberían poder:** escribir una función `async` que
haga `fetch`, maneje `loading`/`error`, y actualice el estado con los datos recibidos.

---

## Clase 10 — Formularios

**Objetivo:** reemplazar el botón "de prueba" (`QuickAdd`) por un formulario real para
agregar tareas.

**Conceptos a explicar:**
- Input **controlado**: el valor del input vive en el estado de React (`value={title}`),
  no en el DOM.
- `onChange` actualiza el estado en cada tecla.
- `onSubmit` en el `<form>` (no `onClick` en el botón), para que también funcione al
  presionar Enter.
- `event.preventDefault()`: evita que el navegador recargue la página al enviar el
  formulario (comportamiento por defecto de HTML).
- Validaciones simples: no agregar tareas con el título vacío (`title.trim() === ''`).

**Archivos a crear/modificar:** `src/components/TaskForm.jsx` (nuevo, reemplaza a
`QuickAdd.jsx`), `src/App.jsx`. Ver `clases/clase-10-formularios/`.

**Código para mostrar:**

```jsx
function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (title.trim() === '') return

    onAddTask(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}
```

**Ejercicio práctico:** agregar una validación extra: que el título tenga al menos 3
caracteres, mostrando un mensaje de error simple si no la cumple.

**Errores comunes:**
- Olvidarse de `value={title}` (el input queda "no controlado" y React tira un warning).
- Olvidarse de `event.preventDefault()` (la página se recarga y se pierde todo).
- Usar `onClick` en el botón en vez de `onSubmit` en el `<form>` (deja de funcionar
  con la tecla Enter).
- Olvidarse de limpiar el input después de agregar (`setTitle('')`).

**Preguntas para la clase:**
- ¿Qué pasa si sacamos `event.preventDefault()`?
- ¿Por qué el input "sabe" qué mostrar sin que lo estemos leyendo del DOM?

**Qué NO explicar todavía:** librerías de formularios (React Hook Form, Formik),
validaciones complejas, formularios con múltiples pasos.

**Antes de pasar a la Clase 11, deberían poder:** armar un input controlado completo
(estado + `value` + `onChange`) y un `onSubmit` con `preventDefault`.

---

## Clase 11 — React Router

**Objetivo:** que la aplicación tenga varias páginas con URLs propias.

**Conceptos a explicar:**
- `BrowserRouter`: envuelve toda la app (una sola vez, en `main.jsx`) y habilita el
  ruteo.
- `Routes` + `Route`: `Routes` mira la URL actual y renderiza el `Route` que coincida.
- `Link`: como un `<a>`, pero no recarga la página (React Router intercepta el clic).
- `useParams()`: lee los parámetros dinámicos de la URL (`/tasks/:id` → `{ id }`).

**Archivos a crear/modificar:**
- `src/main.jsx` (agregar `BrowserRouter`)
- `src/App.jsx` (pasa a ser el layout: `NavBar` + `Routes` + `Footer`)
- `src/components/NavBar.jsx` (nuevo, reemplaza a `Header.jsx`)
- `src/pages/Home.jsx`, `src/pages/Tasks.jsx`, `src/pages/TaskDetail.jsx`,
  `src/pages/About.jsx` (nuevos)

Ver `clases/clase-11-router/`.

**Código para mostrar:**

```jsx
// main.jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

```jsx
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/tasks" element={<Tasks />} />
  <Route path="/tasks/:id" element={<TaskDetail />} />
  <Route path="/about" element={<About />} />
</Routes>
```

```jsx
// TaskDetail.jsx
const { id } = useParams()
```

**Nota pedagógica importante:** `TaskDetail` **no comparte estado** con `Tasks` (para
no tener que usar Context, que está fuera del alcance del curso). En cambio, pide el
dato directamente a la API por `id`, reutilizando lo aprendido en la Clase 9. Vale la
pena decir esto en voz alta en clase: es una simplificación deliberada, no un olvido.

**Ejercicio práctico:** agregar una página `/contacto` con un texto fijo y su link en
la `NavBar`.

**Errores comunes:**
- Poner `<BrowserRouter>` en cualquier componente en vez de en `main.jsx` (o
  duplicarlo).
- Usar `<a href="/tasks">` en vez de `<Link to="/tasks">` (recarga toda la página).
- Definir las rutas en un orden donde una más general "tapa" a una más específica
  (en este proyecto no pasa, pero vale la pena mencionarlo).
- Esperar que `useParams()` funcione en un componente que no está dentro de un `<Route>`.

**Preguntas para la clase:**
- ¿Qué diferencia hay entre hacer clic en un `<Link>` y en un `<a>` normal?
- ¿Por qué `TaskDetail` vuelve a pedir el dato a la API en vez de reutilizar la lista
  de `Tasks`?

**Qué NO explicar todavía:** rutas anidadas, rutas protegidas/privadas, `loader`s de
React Router, `Outlet`. Alcanza con rutas simples y `useParams`.

**Antes del proyecto final, deberían poder:** armar una navegación de varias páginas
con `Link`, `Routes`/`Route`, y leer un parámetro de la URL con `useParams`.

---

## Clase 12 — Firebase setup

**Objetivo:** que las tareas persistan de verdad (en una base de datos), en vez
de perderse cada vez que se recarga la página. Arranca la Fase 2 del curso:
el proyecto integrador tipo Trello.

**Conceptos a explicar:**
- Qué es un BaaS (Backend as a Service) y por qué usar uno en vez de guardar
  todo solamente en el estado del navegador.
- Crear un proyecto en la consola de Firebase y habilitar Firestore (en modo
  de prueba por ahora; se restringe con reglas reales en la Clase 14).
- Instalar el SDK (`npm install firebase`) y centralizar la configuración en
  un único archivo, `src/firebase/config.js`.
- Variables de entorno con Vite: archivo `.env` (con prefijo `VITE_` para que
  el navegador pueda leerlas), y `.env.example` como plantilla que sí se sube
  al repositorio.
- Firestore: una **colección** (`tareas`) contiene **documentos** — la misma
  idea que un array de objetos, pero persistente. Funciones nuevas:
  `getDocs`, `addDoc`, `updateDoc`, `deleteDoc`.

**Archivos a crear/modificar:** `src/firebase/config.js` (nuevo),
`.env` (nuevo, no se sube a git), `.env.example` (nuevo), `.gitignore`
(agregar `.env`), `src/pages/Tasks.jsx` (migrar de `fetch` a Firestore).
Ver `clases/clase-12-firebase-setup/`.

**Código para mostrar:**

```js
// src/firebase/config.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
```

```jsx
// src/pages/Tasks.jsx (fragmento)
useEffect(() => {
  async function loadTasks() {
    setLoading(true)
    setError(null)
    try {
      const snapshot = await getDocs(tasksCollection)
      const tasksFromDb = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }))
      setTasks(tasksFromDb)
    } catch (err) {
      setError('No se pudieron cargar las tareas')
    } finally {
      setLoading(false)
    }
  }
  loadTasks()
}, [])
```

**Ejercicio práctico:** agregar una función `handleClearCompleted` que
recorra las tareas completadas y las borre de Firestore una por una con
`deleteDoc` (y después actualice el estado local).

**Errores comunes:**
- Escribir una variable en `.env` sin el prefijo `VITE_` (Vite no la expone
  al código del cliente y queda `undefined`).
- Subir el archivo `.env` al repositorio (por eso se agrega a `.gitignore`;
  solo se sube `.env.example`, sin valores reales).
- Llamar a `getDocs`/`addDoc`/`updateDoc`/`deleteDoc` sin `await` y usar el
  resultado antes de tiempo.
- Confundir el `id` del documento de Firestore (ahora un string) con el
  `id` numérico que antes se generaba a mano con `Date.now()`.

**Preguntas para la clase:**
- ¿Qué pasa ahora si recargás la página, comparado con antes de esta clase?
- ¿Por qué el `id` de una tarea es un string "raro" en vez de un número?

**Qué NO explicar todavía:** Firebase Auth (Clase 13), reglas de seguridad
por usuario (Clase 14), el resto del modelo de datos — proyectos, categorías,
subtareas (Clases 15 en adelante). `TaskDetail.jsx` se deja sin tocar por
ahora, sigue usando la API de prueba.

**Antes de pasar a la Clase 13, deberían poder:** crear un proyecto de
Firebase, conectarlo a una app de React con variables de entorno, y hacer
lectura/creación/actualización/borrado real (CRUD) sobre una colección de
Firestore.

---

## Clase 13 — Autenticación

**Objetivo:** que cada persona pueda crear una cuenta e iniciar sesión, como
paso previo a que los datos (proyectos, tareas) le pertenezcan a alguien.

**Conceptos a explicar:**
- Firebase Auth: `createUserWithEmailAndPassword` (registro) y
  `signInWithEmailAndPassword` (login).
- Dos formularios controlados más (mismo patrón de la Clase 10): uno para
  registro, otro para login.
- A propósito, **todavía sin Context API**: el usuario se guarda con
  `useState` en `App` y se pasa por props a `NavBar` y a `Login`. La idea es
  que se sienta el problema (cuantas más pantallas lo necesiten, más props
  hay que pasar) antes de resolverlo en la Clase 14.

**Archivos a crear/modificar:** `src/firebase/config.js` (agregar `auth`),
`src/pages/Login.jsx` (nuevo), `src/pages/Register.jsx` (nuevo), `App.jsx`
(rutas `/login` y `/registro`, `useState(user)`), `NavBar.jsx` (recibe
`user` por props). Ver `clases/clase-13-autenticacion/`.

**Código para mostrar:**

```jsx
// pages/Login.jsx (fragmento)
async function handleSubmit(e) {
  e.preventDefault()
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    onLogin(result.user) // se lo avisamos a App por props
    navigate('/tasks')
  } catch (err) {
    setError('Email o contraseña incorrectos.')
  }
}
```

**Ejercicio práctico:** agregar validación en `Register.jsx` para mostrar un
error propio si la contraseña tiene menos de 6 caracteres, sin esperar a que
Firebase lo rechace.

**Errores comunes:**
- Que el objeto que devuelve Firebase (`result.user`) se confunda con el
  documento de la colección `usuarios` (Clase 20) — son cosas distintas.
- Olvidar `e.preventDefault()` y que el formulario recargue la página.
- No mostrar ningún mensaje cuando `signInWithEmailAndPassword` falla.

**Preguntas para la clase:**
- ¿Qué pasa con el usuario logueado si recargamos la página ahora mismo?
- Si quisiéramos mostrar el usuario en `Footer.jsx` también, ¿qué habría
  que hacer? (dejar que respondan "pasarlo por props" y notar lo incómodo
  que empieza a ser)

**Qué NO explicar todavía:** Context API (Clase 14), reglas de seguridad de
Firestore por usuario (Clase 14), recuperar la sesión al recargar la página
(eso lo resuelve `onAuthStateChanged`, en la Clase 14).

**Antes de pasar a la Clase 14, deberían poder:** registrar un usuario,
iniciar sesión, y notar por qué pasar el usuario por props a mano, pantalla
por pantalla, no escala bien.

---

## Clase 14 — Context API + Rutas protegidas

**Objetivo:** resolver el problema de la Clase 13 (pasar el usuario por
props a mano) con la herramienta que React ofrece para esto, y usarla para
proteger rutas que solo deberían verse con sesión iniciada.

**Conceptos a explicar:**
- Qué es el "prop drilling" (pasar una prop por componentes que no la usan,
  solo para que llegue más abajo) y por qué duele a medida que crece la app.
- Context API: `createContext`, `<Contexto.Provider value={...}>` y
  `useContext`. Se crea un `UserProvider` que envuelve toda la app una sola
  vez, en `main.jsx`.
- `onAuthStateChanged`: escucha en tiempo real si hay sesión activa,
  incluso apenas se carga la página — así ya no hace falta guardar nada "a
  mano" en el login.
- Rutas protegidas: un componente `RutaProtegida` que redirige a `/login`
  con `<Navigate>` si no hay usuario.
- (De paso, sin ser el foco de la clase) `useUser()` es un ejemplo mínimo de
  **custom hook**: una función que empieza con "use" y por dentro llama a
  otro hook. Alcanza con mostrarlo funcionando, no hace falta enseñar cómo
  crear custom hooks propios todavía.

**Archivos a crear/modificar:** `src/context/UserContext.jsx` (nuevo),
`src/components/RutaProtegida.jsx` (nuevo), `main.jsx` (envolver con
`UserProvider`), `App.jsx`, `NavBar.jsx` y `Login.jsx` (ya no reciben
`user`/`onLogin` por props). Ver
`clases/clase-14-context-rutas-protegidas/`.

**Código para mostrar:**

```jsx
// context/UserContext.jsx
const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoadingUser(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={{ user, loadingUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
```

```jsx
// components/RutaProtegida.jsx
function RutaProtegida({ children }) {
  const { user, loadingUser } = useUser()
  if (loadingUser) return <p>Cargando...</p>
  if (!user) return <Navigate to="/login" />
  return children
}
```

**Ejercicio práctico:** envolver también la ruta `/about` con
`RutaProtegida` y probar qué pasa al entrar sin sesión — después
sacarlo, porque esa pantalla no debería requerir login (buena
oportunidad para discutir qué rutas conviene proteger y cuáles no).

**Errores comunes:**
- Poner `<UserProvider>` en un lugar que no envuelva a todo `<App />` (por
  ejemplo, adentro de una sola página) — el contexto no llega al resto.
- Llamar a `useUser()` fuera de un componente envuelto por `UserProvider`.
- Confundir `loadingUser` (todavía no sabemos si hay sesión) con `!user`
  (ya sabemos que no hay) — mezclar los dos casos muestra el login "flasheado"
  antes de tiempo.

**Preguntas para la clase:**
- ¿Por qué `NavBar` ya no necesita recibir `user` como prop?
- ¿Qué pasaría si dos componentes en pantallas distintas necesitan el
  usuario al mismo tiempo? ¿Cómo se resolvía en la Clase 13, y cómo ahora?
- ¿Para qué sirve `loadingUser` — qué pantalla se vería sin él?

**Qué NO explicar todavía:** reglas de seguridad de Firestore por usuario
(se simplifican a propósito, ver Decisiones de arquitectura), el resto del
modelo de datos — proyectos, categorías, tareas, subtareas (Clases 15 en
adelante).

**Antes de pasar a la Clase 15, deberían poder:** explicar con sus palabras
qué problema resuelve Context API, envolver una app con un Provider, leer
ese valor con un hook (`useContext` o un atajo como `useUser`), y proteger
una ruta según si hay o no sesión iniciada.

---

## Clase 24 — Cierre y proyecto final

**Objetivo:** integrar todo lo aprendido — Fase 1 (fundamentos) y Fase 2
(proyecto tipo Trello con Firebase) — en una sola aplicación coherente, lista
para mostrar en un portfolio.

La app final (carpeta `src/` en la raíz del repositorio) usa:

- componentes, JSX y props (todas las clases)
- eventos, `useState`, `useEffect` (Clases 3, 4, 8)
- arrays + `.map()` con `key`, renderizado condicional (Clases 5 y 6)
- comunicación entre componentes / lifting state up (Clase 7), llevado al
  límite con el usuario logueado en la Clase 13 (props) y resuelto con
  Context API en la Clase 14
- `fetch`/Firestore + `async/await`, formularios controlados (Clases 9, 10, 12)
- React Router (Clase 11)
- Context API (Clase 14) para el usuario logueado en toda la app
- Firebase Auth (Clase 13) y Firestore como base de datos del proyecto,
  categorías, tareas, subtareas y asignación de usuarios (Clases 15 a 22)

**Sugerencias de cierre de curso:**
- Pedirles que agreguen **filtros** (por estado, por usuario asignado) sobre
  el array de tareas — buen ejercicio integrador, sin conceptos nuevos.
- Deploy real: frontend en Vercel, proyecto en Firebase (Clase 24).
- Revisión en grupo: recorrer el código final componente por componente y que
  cada alumno explique qué concepto representa cada archivo.
- Si sobra tiempo: drag & drop entre categorías, como desafío opcional.

**Preguntas de repaso general:**
- ¿Por qué `Task` ya no tiene su propio `useState` como en la Clase 4?
- ¿Qué pasaría si borramos el array de dependencias del `useEffect` en `Tasks.jsx`?
- ¿Cómo llega un clic en el botón "Eliminar" de `Task` hasta Firestore?
- ¿Qué problema resolvió Context API que no se podía resolver bien solo con props?

---

## Revisión final — verificación de reglas

Se confirma que el proyecto **no utiliza**:

- ❌ Context API
- ❌ `useReducer`
- ❌ `useMemo`
- ❌ `useCallback`
- ❌ Redux / Zustand
- ❌ Custom hooks
- ❌ Testing
- ❌ Optimización avanzada
- ❌ TypeScript
- ❌ Axios
- ❌ Tailwind / Bootstrap / Material UI
- ❌ React Query / TanStack Query
- ❌ Librerías innecesarias (la única dependencia agregada además de React es
  `react-router-dom`, y solo a partir de la Clase 11, tal como pide la consigna)

Todo el proyecto usa exclusivamente: componentes, JSX, props, eventos, `useState`,
`.map()`/`key`, condicionales (`if`/ternario/`&&`), lifting state up, `useEffect`,
`fetch`/`async`/`await`, formularios controlados y React Router básico
(`BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`).
