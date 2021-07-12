const {Sequelize, DataTypes, Model} = require("sequelize");

const sequelize = new Sequelize('database', 'root', 'password', {
    dialect : "sqlite",
    storage : "./resturant.sqlite",
    logging: false
})


module.exports = {sequelize, DataTypes, Model};