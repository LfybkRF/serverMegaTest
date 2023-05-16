const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    token: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING}
})

const Groups = sequelize.define('groups', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    groupId : {type : DataTypes.INTEGER},
    type: {type: DataTypes.STRING}
})

const AppData = sequelize.define('params', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    appId: {type: DataTypes.INTEGER, unique: true},
    token: {type: DataTypes.STRING}
})


module.exports = {
    User,
    Groups,
    AppData
}