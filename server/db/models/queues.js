const Sequelize = require('sequelize')
const db = require('../db')

const Queue = db.define('queue', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = Queue