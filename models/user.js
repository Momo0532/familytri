//adding authetincation piece jv 1/9/2019
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    nameLast: {
      type: DataTypes.STRING,
      allowNull: true,
        validate: {
          len: [1]
        }
    },
  
      nameFirst: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
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
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [10],
          isNumeric: true //sets input to only accept numbers
        }
      },
  
      phone_cell: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [10],
          isNumeric: true ///sets input to only accept numbers
        }
      },
  
      address_street: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        } 
      },
  
      address_aptNum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  
      address_city: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,30]
        }
      },
  
      address_state: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
  
      address_zip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [5]
        }
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
        allowNull: true, //set to true due to fact that not every user is a child
        len: [1]
      },
  
      date_of_birth: {
        type: DataTypes.STRING,
        allowNull: true,
        isDate: true
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
  