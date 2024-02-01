import '../assets/css/App.css'
import NavBar from './navBar'
import Inicio from './inicio'
import Tarjeta from './tarjeta'
import Profesiones from './profesiones'

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
