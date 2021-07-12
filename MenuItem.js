const {sequelize, DataTypes, Model} = require('./db');

class MenuItem extends Model {};

MenuItem.init({
    price: DataTypes.DECIMAL(5,2)
}, {
    sequelize,
    timestamps: false
})

module.exports = {MenuItem};