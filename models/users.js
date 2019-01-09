module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      nameLast: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
  
      nameFirst: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
  
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true //checks input if it's a valid email
        }
      },
  
      phone_home: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [10],
          isNumeric: true //sets input to only accept numbers
        }
      },
  
      phone_cell: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [10],
          isNumeric: true ///sets input to only accept numbers
        }
      },
  
      address_street: {
        type: DataTypes.STRING,
        allowNull: false,
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
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
  
      address_state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
  
      address_zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
  
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
  
      child: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
  
      school_name: {
        type: DataTypes.STRING,
        allowNull: true, //set to true due to fact that not every user is a child
        len: [1]
      },
  
      date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false,
        isDate: true
      }
  
    }); //end of var Users
  
    return Users;
  };
  