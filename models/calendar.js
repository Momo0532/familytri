module.exports = function(sequelize, DataTypes) {
  var Calendar = sequelize.define("Calendar", {
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 30]
    },

    fees: {
      type: DataTypes.INTEGER,
      len: [1],
      isInt: true
    },

    location_street: {
      type: DataTypes.STRING,
      len: [1, 30],
      isAlphanumeric: true //sets input to only accept numbers and letters
    },

    location_city: {
      type: DataTypes.STRING,
      len: [1, 30],
      isAlpha: true //sets input to only accept letters
    },

    location_state: {
      type: DataTypes.STRING,
      len: [2, 2],
      isAlpha: true //sets input to only accept letters
    },

    location_zip: {
      type: DataTypes.INTEGER,
      len: [5],
      isNumeric: true //sets input to only accept numbers
    }
  }); //end of var Calendar

  // Calendar.associate = function(models) {
  //     Calendar.belongsTo(models.Users, {
  //         foreignKey: {
  //             allowNull: false
  //         }, //end foreignKey
  //     }) //end Post.belongsTo
  // }; //end Post.associate

  return Calendar;
}; //end module.exports
