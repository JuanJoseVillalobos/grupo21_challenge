import { useState, useEffect } from "react";

import Todo from './components/Todo'

function App() {
const [aspirantes, setAspirantes] = useState();

  useEffect(() => {
    fetch("http://localhost:3030/api/aspirantes")
      .then((response) => response.json())
      .then((data) => 
      setAspirantes(data.data),
      );
  }, []);
      console.log(aspirantes)

  return (
    <>
    <h1>{aspirantes[0].email}</h1>
    </>
  )
}

export default App