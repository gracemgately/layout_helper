const router = require('express').Router()
const { Queue } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Queue.findAll({})
    .then(everything => res.json(everything))
    .catch(next)
})

router.delete('/delete/:QId', (req, res, next) => {
  Queue.findById(req.params.QId)
    .then(userQueue => userQueue.destroy({force: true}))
    .then(response => res.json(response))
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
