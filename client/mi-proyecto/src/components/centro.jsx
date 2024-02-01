import '../assets/css/App.css'
import NavBar from './NavBar'
import Inicio from './Inicio'
import Tarjeta from './Tarjeta'
import Profesiones from './Profesiones'

function Centro() {
  return (
    <>
      <div>
        <NavBar/>
        <Inicio/>
        <Tarjeta/>
        <Profesiones/>
      </div>
    </>
  )
}

export default Centro
