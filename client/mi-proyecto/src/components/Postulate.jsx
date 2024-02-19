import React, { useState } from "react";

function Postulate() {

    const [search, setSearch] = useState();



    return (
        <>
            <form onSubmit={ev => {
                ev.preventDefault()
                setSearch(ev.target.search.value)
            }}>

                <section className="content profesiones">
                    <h2 className="mt-3">Postulate acá</h2>
                    <div className="list-group shadow-sm p-3 mb-5 rounded">
                        <input type="text" name='search' autoComplete="off"></input>
                        <button type="submit">Buscar</button>
                        <p>Resultados para: {search}</p>
                    </div>
                </section>
            </form>
        </>
    )
}

export default Postulate