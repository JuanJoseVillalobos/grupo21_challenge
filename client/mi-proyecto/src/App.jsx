import './assets/css/App.css'
import Centro from './components/Centro'
import CajaCostado from './components/CajaCostado'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import Tarjeta from './components/Tarjeta'
import Profesiones from './components/Profesiones'

function App() {
  return (
    <>

        <div className="dashboard">
          <NavBar />
          <CajaCostado />

          <main className="content-wrap">
            <Centro />
          </main>

        </div>
        
    </>
  )
}

export default App
