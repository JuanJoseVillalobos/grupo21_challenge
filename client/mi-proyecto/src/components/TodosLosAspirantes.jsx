import { useState, useEffect } from "react";
import React from "react";
import Tarjeta from "./Tarjeta";

function propsTarjeta() {
    const [aspirantes, setAspirantes] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3030/api/aspirantes")
            .then((response) => response.json())
            .then((data) =>
                setAspirantes(data.data),
            );
    }, []);

    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
    ];


    return (
        <>
            <main className="content-wrap">
                <section className="content aspirantes">
                    <h2>Aspirantes</h2>
                    <article className="person-boxes">

                        {data.map((user)=>(
                            <Tarjeta key={user.id} nombre={user.name}/>
                        ))}
                        
                    </article>
                </section>
            </main>
        </>
    )
}

export default propsTarjeta