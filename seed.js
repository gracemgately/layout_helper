const db = require('./server/db');
const User = require('./server/db/models/user');
const BinarySearchTree = require('./server/db/models/binarysearchtree');
const LinkedList = require('./server/db/models/linkedlists')



const users = [{
  firstName: 'Grace',
  lastName: 'Gately',
  email: 'grace@grace.com',
  addressLine1: '123 Main St',
  addressLine2: 'APT 5',
  city: 'New York',
  state: 'NY',
  zipCode: '10002',
  password: '123',
  salt: 'iamSaltzzz',
  googleId: '23020zjsjwgoogleID223'
}, {
  firstName: 'Karina',
  lastName: 'Keen',
  email: 'karina@karina.com',
  addressLine1: '2311 Magic Avenue',
  addressLine2: 'APT 7B',
  city: 'New York',
  state: 'NY',
  zipCode: '10007',
  password: '1234',
  salt: 'iamalsosaltxxxx',
  googleId: '444googleID773'
}];


const binarySearchTrees = [{
    name: 'BeautifulBST',
    content: [
      {
        value: 1200,
        left: 1,
        right: 2,
        parent: null
      }, 
      {
        value: 600,
        left: 3,
        right: 4,
        parent: 0
      }, 
      {
        value: 1000,
        left: 5,
        right: 6,
        parent: 0
      }, 
      {
        value: 700,
        left: 7,
        right: 8,
        parent: 1,
      }
    ],
    userId: 1
}];

const linkedLists = [{
  name: 'LoopyLList',
  content: [
    {
      value: 1,
      next: 1,
      previous: null
    },
    {
      value: 4,
      next: 2,
      previous: 0
    },
    {
      value: 16,
      next: 3,
      previous: 1
    },
    {
      value: 34,
      next: null,
      previous: 2
    },
  ], 
  userId: 2
}]

const seed = () =>
    Promise.all(users.map(user =>
        User.create(user))
    )
    .then(() =>
        Promise.all(binarySearchTrees.map(BST =>
    BinarySearchTree.create(BST))
    ))
    .then(() =>
        Promise.all(linkedLists.map(LL =>
    LinkedList.create(LL))
    ))

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};
main();


