import React, { useState } from "react";

function Postulate() {

    const [search, setSearch] = useState();



    return (
        <>
            <form onChange={ev => {
                ev.preventDefault()
                setSearch(ev.target.search.value)
                const nombre = setSearch(ev.target.nombre.value)
                const apellido = setSearch(ev.target.apellido.value)
                const fechaDeNacimiento = setSearch(ev.target.fechaDeNacimiento.value)
                const dni = setSearch(ev.target.dni.value)
                const email = setSearch(ev.target.email.value)
                const telefono = setSearch(ev.target.telefono.value)
                const profesion = setSearch(ev.target.profesion.value)
                const genero = setSearch(ev.target.genero.value)
                const imagen = setSearch(ev.target.imagen.value)


            }}>

                <section className="content profesiones">
                    <h2 className="mt-3">Postulate acá</h2>
                    <div className="list-group shadow-sm p-3 mb-5 rounded">
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name='nombre' id="nombre" autoComplete="off"></input>
                        </div>
                        <div>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" name='apellido' id="apellido" autoComplete="off"></input>
                        </div>
                        <div>
                            <label htmlFor="fechaDeNacimiento">Fecha de nacimiento</label>
                            <input type="date" name='fechaDeNacimiento' id="fechaDeNacimiento" autoComplete="off"></input>
                        </div>
                        <div>
                            <label htmlFor="number">DNI</label>
                            <input type="number" name='dni' id="number" autoComplete="off"></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id="email" autoComplete="off"></input>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="genero">Genero</label>
                                <input type="text" name='email' id="genero" autoComplete="off"></input>
                            </div>
                            <div>
                                <label htmlFor="imagen">Foto</label>
                                <input type="file" name='email' id="imagen" autoComplete="off"></input>
                            </div>
                            <div>
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="number" name='telefono' id="telefono" autoComplete="off"></input>
                            </div>

                            <div>
                                <label htmlFor="profesion">Profesión</label>
                                <input type="text" name='profesion' id="profesion" autoComplete="off"></input>
                            </div>


                            <br />
                            <button type="submit">Mandar datos</button>
                        </div>
                    </div>
                </section>
            </form >
        </>
    )
}

export default Postulate