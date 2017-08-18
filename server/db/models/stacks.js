const Sequelize = require('sequelize')
const db = require('../db')

const Stack = db.define('stack', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = Stack