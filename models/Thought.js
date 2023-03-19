const { DataTypes } = require('sequelize')

const db = require('../db/conn')

// User
const User = require('./User')

const Thought = db.define('Thought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

Thought.belongsTo(User)
User.hasMany(Thought)

module.exports = Thought

// adicionar {force: true} no sync para adicionar a relação entre as tabelas