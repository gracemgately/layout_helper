const User = require('./user')
const BinarySearchTree = require('./binarysearchtree')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

BinarySearchTree.belongsTo(User)
User.hasMany(BinarySearchTree, { as: 'Visualizations' })
// instances of User will get the accessors getVisualiztions and setVisualiztions



/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  BinarySearchTree
}
