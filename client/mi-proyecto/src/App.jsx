import './assets/css/App.css'
import Centro from './components/Centro'
import CajaCostado from './components/CajaCostado'
import Inicio from './components/Inicio'
import Prueba from './components/prueba'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Challenge</title>
        <link rel="stylesheet" href="./src/assets/css/normalize.min.css" />
        <link rel='stylesheet' href='./src/assets/css/font-awesome.min.css' />
        <link rel="stylesheet" href="./src/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="./src/assets/css/style.css" />
      </head>
      <div className="dashboard">
        <main className="content-wrap">
          <Centro />
        </main>
      </div>
    </>
  )
}

export default App
