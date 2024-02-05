import './assets/css/App.css'
import Centro from './components/Centro'
import CajaCostado from './components/CajaCostado'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      
      <div className="dashboard">
        <NavBar/>
        <CajaCostado/>
        <main className="content-wrap">
          <Centro/>
        </main> 
      </div>
    </>
  )
}

export default App
