const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const BinarySearchTree = db.model('binarysearchtree')
const Bluebird = require('bluebird')

describe('BinarySearchTree routes', () => {

  beforeEach(() => {
    return db.sync({ force: true })
  });

  // erase all tasks after each spec
  afterEach( () => {
    return db.sync({force: true});
  });

  describe('/api/binarysearchtrees/', () => {

    beforeEach(() => {
      return Bluebird.all([
        BinarySearchTree.create({
          name: "BST1",
          content: [{ value: 1200, left: 1, right: 2, parent: null }, { value: 600, left: 3, right: 4, parent: 0 }, { value: 1000, left: 5, right: 6, parent: 0 }, { value: 700, left: 7, right: 8, parent: 1 }]
        }),
        BinarySearchTree.create({
          name: "BST2",
          content: [{ value: 10, left: 1, right: 2, parent: null }, { value: 60, left: 3, right: 4, parent: 0 }, { value: 100, left: 5, right: 6, parent: 0 }]
        })
      ]);
    });

    it('GET /api/binarysearchtrees', () => {
      return request(app)
        .get('/api/binarysearchtrees')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
        expect(res.body.length).to.be.equal(2)
      })
    })
  })
})
