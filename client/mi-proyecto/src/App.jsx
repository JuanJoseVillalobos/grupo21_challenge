import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:3030/api/profesiones')
    .then((response)=>{response.json()})
    .then((data)=>setData(data))
  }, [])
  console.log(data)
  return (
    <>
    <div>{data}</div>
    </>
  )
}

export default App