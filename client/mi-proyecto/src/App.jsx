import './assets/css/App.css'
import Centro from './components/Centro'
import CajaCostado from './components/CajaCostado'
import Inicio from './components/Inicio'
import Prueba from './components/prueba'

function App() {
  return (
    <>
      <div class="dashboard">
        <Prueba />
        <main class="content-wrap">

          <Centro />
        </main>
      </div>
    </>
  )
}

export default App
