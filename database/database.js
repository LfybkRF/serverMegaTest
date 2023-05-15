const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    "megatest",
    "postgres",
    "170305",
    {
        dialect: 'postgres',
        host: "localhost",
        port: 5432
    }

)