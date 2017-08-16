const router = require('express').Router()
const { DataStructure } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  DataStructure.findAll({})
    .then(everything => res.json(everything))
    .catch(next)
})

router.post('/', (req, res, next) => {
  const name = req.body.name;
  const content = req.body.content;
  const category = req.body.category;
  const userId = req.body.userId;

  DataStructure.create({ name, content, category, userId })
    .then(newDS => res.json(newDS))
    .catch(next)
  })
