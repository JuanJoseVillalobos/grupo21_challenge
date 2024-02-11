const db = require('../../db/models');

const controller = {
    aspirants: (req, res) => {
        db.Candidate.findAll({
            include: [{ model: db.Profession, as: "profession", attributes: ['name']}] 
        })
             .then(aspirantes => {
                 res.json({
                     data: aspirantes
                 });
             })
    },
    profesion: (req,res)=>{
        db.Profession.findAll()
        .then((profesions)=>{
            res.json({
                data:profesions
            })
        })
    }
};

module.exports = controller;