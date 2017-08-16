const Sequelize = require('sequelize')
const db = require('../db')

const DataStructure = db.define('datastructure', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.JSON
  },
  category: {
    type: Sequelize.ENUM,
    values: ['Linked List', 'Binary Search Tree', 'Queue', 'Stack']
  }
})

module.exports = DataStructure
