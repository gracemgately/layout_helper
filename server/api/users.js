const router = require('express').Router()
const {User, BinarySearchTree, LinkedList} = require('../db/models')
module.exports = router

router.get('/:userId/data-structures', (req, res, next) => {
  var id = req.params.userId;
  User.findOne({ where: 
    {id: id },
    attributes: ['id', 'email'],
    include: [
      BinarySearchTree,
      LinkedList
    ]
  })
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    .then(user => res.json(user))
    .catch(next)
})
