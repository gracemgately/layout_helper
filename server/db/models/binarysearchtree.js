const Sequelize = require('sequelize')
const db = require('../db')

const BinarySearchTree = db.define('binarysearchtree', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = BinarySearchTree
