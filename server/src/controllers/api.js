const db = require('../../db/models');

const controller = {
    aspirants: (req, res) => {
        db.Aspirante.findAll({
            include: [{ model: db.Profesion, as: "profesion", attributes: ['profesion']}] 
        })
             .then(aspirantes => {
                 res.json({
                     data: aspirantes
                 });
             })
    },
    profesion: (req,res)=>{
        db.Profesion.findAll()
        .then((profesions)=>{
            res.json({
                data:profesions
            })
        })
    }
};

module.exports = controller;