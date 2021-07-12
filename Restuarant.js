const {sequelize, DataTypes, Model} = require('./db');

class Restuarant extends Model {}


Restuarant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
});


module.exports = {Restuarant};

