const db = require('../../db/models');

const controller = {
    api: async (req, res) => {
        try {
            const aspirantes = await db.Aspirante.findAll({
                include: [{ model: db.Profesion, as: "profesion", attributes: ['profesion'] }]
            });
            res.json({ data: aspirantes });
        } catch (error) {
            console.log("error en la petición", error);
            res.status(500).json({ error: 'Hubo un error en la petición' });
        }
    },
    profe: async (req, res) => {
        try {
            const profesiones = await db.Profesion.findAll();
            res.json({ data: profesiones });
        } catch (error) {
            console.log("error en la petición", error);
            res.status(500).json({ error: 'Hubo un error en la petición' });
        }
    },
    postularse: async (req, res) => {

        try {
            console.log(req.file);
            const profesion = await db.Profesion.findOne({
                where: {
                    id: req.body.profesion_id // Suponiendo que tienes un campo 'nombre' en tu modelo de Profesion
                }
            });
            const nuevoAspirante = await db.Aspirante.create({
                dni: req.body.dni,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                telefono: req.body.telefono,
                url_linkedin: req.body.url_linkedin,
                fecha_de_nacimiento: req.body.fecha_de_nacimiento,
                sexo: req.body.sexo,
                imagen: req.file?.filename,
                profesion_id: profesion.id
            })
            res.json({
                data: nuevoAspirante,
                status: 200,
                created: "ok"
            })
        } catch (error) {
            console.log("error en la petición", error);
            res.status(500).json({ error: 'Hubo un error en la petición' });
        }
    }
};

module.exports = controller;