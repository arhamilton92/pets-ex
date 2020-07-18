module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('Pet', {
        species:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        area: {
            type: DataTypes.STRING,
            allowNull:false,
        }
    })

    Pet.associate = models => {
        Pet.belongsTo(models.Collection, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Pet;
};