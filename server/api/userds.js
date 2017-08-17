const router = require('express').Router()

const { User, BinarySearchTree, LinkedList } = require('../db/models')

module.exports = router

// router.get(`/:userId?type=model`, (req, res, next) => {
//     if (Model === 'binarysearchtree') Model = BinarySearchTree
//     console.log(Model);
//     Model.findAll({
//     })
//     .then(users => res.json(users))
//     .catch(next)
// })