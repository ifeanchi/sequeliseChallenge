const {sequelize, DataTypes, Model} = require('./db');

const { Restuarant } = require('./Restuarant');
const { Menu } = require('./Menu');
const { MenuItem } = require('./MenuItem');


//Create our Association!
Restuarant.hasMany(Menu)
Menu.belongsTo(Restuarant)

Menu.hasMany(MenuItem)
MenuItem.belongsTo(Menu)

module.exports = {Restuarant, Menu, MenuItem};
