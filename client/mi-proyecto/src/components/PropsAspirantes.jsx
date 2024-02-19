import { useState, useEffect } from "react";
import React from "react";
import Tarjeta from "./Tarjeta";

function PropsAspirantes() {
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
                    <h2>Aspirantes</h2>
                    <article className="person-boxes">

                        {aspirantes && aspirantes.map((aspirante)=>(
                        <Tarjeta key={JSON.stringify(aspirante.dni)} nombre={JSON.stringify(aspirante.name)} profesion={JSON.stringify(aspirante.profession.name)} />
                        ))}



                    </article>
                </section>
            </main>
        </>
    )
}

export default PropsAspirantes