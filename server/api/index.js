const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/binarysearchtrees', require('./binarysearchtrees'))
router.use('/linkedlists', require('./linkedlists'))
router.use('/queues', require('./queues'))
router.use('/userds', require('./userds'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
