import { useState, useEffect } from "react";
import React from "react";
import Contacto from "./Contacto";

function PropsContacto() {
    const [aspirantes, setAspirantes] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3030/api/profesiones")
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
                    <h2>Contactanos</h2>
                    <article className="person-boxes">

                        {aspirantes && aspirantes.map((aspirante)=>(
                        <Contacto key={JSON.stringify(aspirante.dni)} nombre={JSON.stringify(aspirante.name)} numero={JSON.stringify(aspirante.phoneNumber)} />
                        ))}



                    </article>
                </section>
            </main>
        </>
    )
}

export default PropsContacto