const User = require('./user')
const BinarySearchTree = require('./binarysearchtree')
const LinkedList = require('./linkedlists')
const Queue = require('./queues')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

BinarySearchTree.belongsTo(User)
User.hasMany(BinarySearchTree)

LinkedList.belongsTo(User)
User.hasMany(LinkedList)

// Stack.belongsTo(User)
// User.hasMany(Stack, { as: 'Stacks' })

Queue.belongsTo(User)
User.hasMany(Queue)

// instances of User will get the accessors getVisualiztions and setVisualiztions


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  BinarySearchTree, 
  LinkedList, 
  Queue
}
