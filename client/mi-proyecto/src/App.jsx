import './assets/css/App.css'
import Centro from './components/centro'
import CajaCostado from './components/cajaCostado'

function App() {
  return (
    <>
    <div>
      <title>Dashboard - React</title>
      <link rel="stylesheet" href="./src/assets/css/normalize.min.css" />
      <link rel='stylesheet' href='./src/assets/css/font-awesome.min.css' />
      <link rel="stylesheet" href="./src/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />
      <link rel="stylesheet" href="./src/assets/css/style.css"/>
        <body>
          <div class="dashboard">
            <Centro />
            <CajaCostado />
          </div>
        </body>
    </div>
    </>
      )
}

export default App
