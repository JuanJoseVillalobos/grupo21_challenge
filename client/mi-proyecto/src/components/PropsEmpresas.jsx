import { useState, useEffect } from "react";
import React from "react";
import Empresas from "./Empresas";

function PropsEmpresas() {
    const [aspirantes, setAspirantes] = useState(0);

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
            <main className="content-wrap">
                <section className="content aspirantes">
                    <h2>Url´s de linkedin</h2>
                    <article className="person-boxes">

                        {aspirantes && aspirantes.map((aspirante)=>(
                        <Empresas key={JSON.stringify(aspirante.dni)} nombre={JSON.stringify(aspirante.name)} linkedin={JSON.stringify(aspirante.linkedin)} />
                        ))}



                    </article>
                </section>
            </main>
        </>
    )
}

export default PropsEmpresas