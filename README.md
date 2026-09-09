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
| 12/13 | Proyecto final | todo lo anterior integrado | App completa y navegable |

## Estructura de carpetas (proyecto final)

```text
tasks_project/
├── index.html
├── package.json
├── vite.config.js
├── clases/                        <- checkpoints de cada clase (ver arriba)
│   ├── clase-01-componentes-jsx/
│   ├── clase-02-props/
│   ├── ...
│   └── clase-11-router/
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── components/
    │   ├── NavBar.jsx
    │   ├── Task.jsx
    │   ├── TaskList.jsx
    │   ├── TaskForm.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        ├── Tasks.jsx
        ├── TaskDetail.jsx
        └── About.jsx
```

No hay carpetas `services/`, `hooks/`, `context/`, `utils/` a propósito: no son
necesarias para lo que se enseña en este curso.

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

## Clase 12/13 — Proyecto final

**Objetivo:** integrar todo lo aprendido en una sola aplicación coherente.

La app final (carpeta `src/` en la raíz del repositorio) usa:

- componentes y JSX (todas las clases)
- props (`Task`, `TaskList`, `TaskForm`, `NavBar`)
- eventos (`onClick`, `onChange`, `onSubmit`)
- `useState` (tareas, búsqueda de ejemplo, formulario, loading, error)
- arrays + `.map()` con `key` (lista de tareas)
- renderizado condicional (lista vacía, error, loading)
- comunicación entre componentes / lifting state up (`App`/`Tasks` → `TaskList` → `Task`)
- `useEffect` (título de la pestaña, fetch del detalle)
- `fetch` + `async/await` (cargar tareas de ejemplo, detalle de tarea)
- formulario controlado (`TaskForm`)
- React Router (`Home`, `Tasks`, `TaskDetail`, `About`)

**Sugerencias de cierre de curso:**
- Pedirles que agreguen **filtros** (Todas / Pendientes / Completadas) usando
  `useState` + renderizado condicional sobre el array `tasks` — es un buen ejercicio
  integrador porque combina casi todo lo visto sin introducir conceptos nuevos.
- Pedirles que agreguen una página `/tasks/nueva` con un `TaskForm` de página completa.
- Revisión en grupo: recorrer el código final componente por componente y que cada
  alumno explique qué concepto de React representa cada archivo.

**Preguntas de repaso general:**
- ¿Por qué `Task` ya no tiene su propio `useState` como en la Clase 4?
- ¿Qué pasaría si borramos el array de dependencias del `useEffect` en `Tasks.jsx`?
- ¿Cómo llega un clic en el botón "Eliminar" de `Task` hasta el `setTasks` de `Tasks.jsx`?

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
#   c u r s o _ r e a c t  
 