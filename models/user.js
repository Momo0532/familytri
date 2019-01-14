//adding authetincation piece jv 1/9/2019
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    nameLast: {
      type: DataTypes.STRING,
      allowNull: true
    },
  
      nameFirst: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true //checks input if it's a valid email
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      phone_home: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      phone_cell: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      address_street: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      address_aptNum: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      address_city: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      address_state: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      address_zip: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
  
      child: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
  
      school_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      date_of_birth: {
        type: DataTypes.STRING,
        allowNull: true
      } 
  
    }); //end of var Users
    
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
    
  return User;
};
  