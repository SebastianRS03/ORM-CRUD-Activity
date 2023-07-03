const { Sequelize, DataTypes} = require("sequelize");

const sequelize=new Sequelize({

    host: "localhost",
    username: "root",
    password:"MariaDB7539512486",
    database:"example",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

const GymORM = sequelize.define("device",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    name:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    }
});

module.exports = GymORM;