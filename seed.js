const db = require('./server/db');
const User = require('./server/db/models/user');
const DataStructure = require('./server/db/models/datastructure');



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


const dataStructures = [{
    name: 'CoolestLinkedList',
    content: {},
    category: 'Linked List',
    userId: 2
}, {
    name: 'BeautifulBST',
    content: {},
    category: 'Binary Search Tree',
    userId: 1
}];

const seed = () =>
    Promise.all(users.map(user =>
        User.create(user))
    )
    .then(() =>
        Promise.all(dataStructures.map(dataStructure =>
    DataStructure.create(dataStructure))
))

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
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


