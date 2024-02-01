import '../assets/css/App.css'
import Inicio from './Inicio'
import Tarjeta from './Tarjeta'
import Profesiones from './Profesiones'

function Centro() {
  return (
    <>
        <main class="content-wrap">
        <Inicio/>
        <Tarjeta/>
        <Profesiones/>
        </main>
    </>
  )
}

export default Centro
