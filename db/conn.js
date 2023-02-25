require('dotenv').config()

const { DB_USER, DB_PASS } = process.env

const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('thoughts', DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('conectado com sucesso!')
} catch(err) {
    console.log(err)
}

module.exports = sequelize