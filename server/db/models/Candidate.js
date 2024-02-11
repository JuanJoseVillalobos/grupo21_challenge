
module.exports = (sequelize, DataTypes) => {
    
    let alias = "Candidate"
    let cols = {
        dni: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNumber: {type: DataTypes.STRING,
            field: "phoneNumber"
        },
        linkedin: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        gender: DataTypes.STRING,
        image: DataTypes.STRING,
        professionId: {type: DataTypes.INTEGER,
            field: "professionId"
        }
    }
    let config = {
        tableName: "candidates",
        timestamps: true,
        underscored: true
    }
    const Candidate = sequelize.define(alias, cols, config)
    Candidate.associate = function (models) {
        Candidate.belongsTo(models.Profession, {
          foreignKey: 'professionId',
          as: 'profession'
        });
      };
    return Candidate
}