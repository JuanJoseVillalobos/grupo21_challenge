module.exports = (sequelize, DataTypes) => {
    let alias = "Profession"
    let cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING
    }
    let config = {
        tableName: "professions",
        timestamps: true,
        underscored: true
    }
    const Profession = sequelize.define(alias, cols, config)
    Profession.associate = function (models) {
        Profession.hasMany(models.Candidate, {
            as: 'candidate',
            foreignKey: 'professionId'
        });
    };
    return Profession
}