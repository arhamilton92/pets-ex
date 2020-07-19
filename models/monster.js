
module.exports = (sequelize, DataTypes) => {
    const Monster = sequelize.define('Monster', {
        dex_species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dex_area: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dex_rarity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dex_colors: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return Monster;
}