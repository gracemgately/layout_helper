const Bluebird = require('bluebird');

const { expect } = require('chai')
const db = require('../db')
const BinarySearchTree = db.model('binarysearchtree')

describe('Binary search tree model', () => {

  // clear the database before all tests
  beforeEach(() => {
    return db.sync({ force: true })
  });

  // erase all tasks after each spec
  afterEach( () => {
    return db.sync({force: true});
  });

  describe('test binary search tree', function () {

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

      it('saves binary search tree with name and content', function () {
        return BinarySearchTree.findAll()
          .then(function (alltrees) {
            expect(alltrees).to.have.length(2);
            expect(alltrees[0].name).to.equal('BST1');
            expect(alltrees[1].name).to.equal('BST2');
            expect(alltrees[1].name).to.not.equal('WRONG TREE NAME');
          });
      });
    })
  })

