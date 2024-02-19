import { useEffect, useState } from 'react'
import axios from "axios"
import { listarAspirantes } from './api/api'
import './App.css'

function App() {
  // const [data, setData] = useState()
  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const response = await listarAspirantes()

  //       setData(response);
  //     }
  //     fetchData()
  //   } catch (error) {
  //     console.log("error en los datos");
  //   }
  // }, [])
  // console.log(data, "esto es data");


  return (
    <>
      <div>

        {/* {data && data.length > 0 && data.map((aspirante) => {
          return (
            <p>{aspirante.dni}</p>
          )
        })} */}

      </div>
    </>
  )
}

export default App
