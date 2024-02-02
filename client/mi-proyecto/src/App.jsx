import './assets/css/App.css'
import Centro from './components/Centro'
import CajaCostado from './components/CajaCostado'
import Inicio from './components/Inicio'
import Prueba from './components/prueba'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className="dashboard">
        <main className="content-wrap">

          <Centro />
        </main>
      </div>
    </>
  )
}

export default App
