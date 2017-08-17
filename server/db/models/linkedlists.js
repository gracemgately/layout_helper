const Sequelize = require('sequelize')
const db = require('../db')

const LinkedList = db.define('linkedlist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = LinkedList
