const db = require('../../db/models');

const controller = {
    api: (req, res) => {
        db.Aspirante.findAll({
            include: [{ model: db.Profesion, as: "profesion", attributes: ['profesion'] }]
        })
            .then(aspirantes => {
                res.json({
                    data: aspirantes
                });
            })
    }
};

module.exports = controller;