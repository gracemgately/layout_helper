const router = require('express').Router()

const { User, BinarySearchTree, LinkedList } = require('../db/models')

module.exports = router

router.get(`/:userId?type=${Model}`, (req, res, next) => {
    console.log(Model);
    Model.findAll({
        where: {}
    })
    .then(users => res.json(users))
    .catch(next)
})