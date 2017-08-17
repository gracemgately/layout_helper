const router = require('express').Router()
const { BinarySearchTree } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  BinarySearchTree.findAll({})
    .then(everything => res.json(everything))
    .catch(next)
})

router.post('/', (req, res, next) => {
  const name = req.body.name;
  const content = req.body.content;
  const userId = req.body.userId;

  BinarySearchTree.create({ name, content, userId })
    .then(newDS => res.json(newDS))
    .catch(next)
})
