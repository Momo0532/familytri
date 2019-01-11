module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [],
        },
        date_time: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }); //end of var Event

    Event.associate = function(models) {
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }, //end foreignKey
        }) //end Post.belongsTo
    }; //end Post.associate

    return Event;
};