const router = require('express').Router()
const { Queue } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Queue.findAll({})
    .then(everything => res.json(everything))
    .catch(next)
})

router.post('/', (req, res, next) => {

  const name = req.body.name;
  const content = req.body.content;
  const userId = req.body.userId;

  Queue.create({ name, content, userId })
    .then(newDS => res.json(newDS))
    .catch(next)
  })
