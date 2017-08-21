// import React from 'react'
// import { drawBSTNode2 } from '../components';

// export const breadthFirstForEach = (node) => {
//   var queue = [node];
//   var collection = [];
//   var tree;

//   while (queue.length) {
//     tree = queue.shift();
//     // console.log("tree", tree);
//     let level = treeLevel(tree);
//     // console.log("LEVEL", level);
//     if (node.value) collection.push([drawBSTNode2(tree), level]);

//     if (tree.left) queue.push(tree.left)
//     if (tree.right) queue.push(tree.right)
//   }
//   return collection;
// }

// export const depthFirstPreOrder = (node) => {
//   var queue = [node];
//   var collection = [];
//   var tree;

//   while (queue.length) {
//     tree = queue.shift();
//     let level = treeLevel(tree);
//     if (node.value) collection.push([drawBSTNode2(tree), level]);


//   }
// }

// function treeLevel(node) {
//   var counter = 0;
//   let parent = node.parent || null;
//   while (parent !== null) {
//     counter++;
//     parent = parent.parent || null;
//   }
//   return counter;
// }
