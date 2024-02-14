import '../assets/css/Todo.css'
import Inicio from './Inicio'
import Tarjeta from './Tarjeta'
import Profesiones from './Profesiones'
import NavBar from './NavBar'


function Centro() {
  return (
    <>
      <main className="content-wrap">
        <Inicio />
        <Tarjeta />
      </main>
    </>
  )
}

export default Centro
