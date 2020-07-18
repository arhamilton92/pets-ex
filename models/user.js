module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = models => {
        User.hasOne(models.Collection, {
            onDelete: "cascade"
        });
    }
        
    return User;
}