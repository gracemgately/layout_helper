const router = require('express').Router()
const { Stack } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Stack.findAll({})
    .then(everything => res.json(everything))
    .catch(next)
})


router.delete('/delete/:StackId', (req, res, next) => {
  Stack.findById(req.params.StackId)
    .then(userStack => userStack.destroy({force: true}))
    .then(response => res.json(response))
    .catch(next)
})


router.post('/', (req, res, next) => {

  const name = req.body.name;
  const content = req.body.content;
  const userId = req.body.userId;

  Stack.create({ name, content, userId })
    .then(newDS => res.json(newDS))
    .catch(next)
  })
