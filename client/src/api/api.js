import axios from "axios";

// LISTA LOS ASPIRANTES

export const listarAspirantes = async () => {
    try {
        const response = await axios.get("http://localhost:3030/api/aspirantes")
        return response.data.data

    } catch (error) {
        console.log("error en los datos");
    }
}


// LISTAR PROFESIONES

export const listarProfesiones = async () => {
    try {
        const response = await axios.get("http://localhost:3030/api/profesiones")
        return response.data.data
    } catch (error) {
        console.log("error en los datos");
    }
}

// ENVIAR ASPIRANTE

export const crearAspirante = async (dataAspirante) => {
    try {
        console.log(dataAspirante);
        const formData = new FormData()

        formData.append("dni", dataAspirante.dni)
        formData.append("nombre", dataAspirante.nombre)
        formData.append("apellido", dataAspirante.apellido)
        formData.append("email", dataAspirante.email)
        formData.append("telefono", dataAspirante.telefono)
        formData.append("url_linkedin", dataAspirante.url_linkedin)
        formData.append("fecha_de_nacimiento", dataAspirante.fecha_de_nacimiento)
        formData.append("sexo", dataAspirante.sexo)
        formData.append("imagen", dataAspirante.imagen)
        formData.append("profesion_id", dataAspirante.profesion_id)
        const response = await axios({
            url: "http://localhost:3030/api/postularse",
            method: "POST",
            data: formData
        })
        return response
    } catch (error) {
        console.log("error en los datos");
    }
}