// const db = require('../../database/models');

const controller = {
    api: (req, res) => {
        // db.Aspirantes.findAll()
        //     .then(aspirantes => {
        //         res.json({
        //             data: aspirantes
        //         });
        //     })

        res.json({
            data: 'aspirantes'
        })
    }
};

module.exports = controller;