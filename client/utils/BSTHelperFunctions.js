export const gradient = () => {
  return (
    <defs>
      <linearGradient id="MyGradient">
        <stop offset="5%" stopColor="yellow" />
        <stop offset="95%" stopColor="green" />
      </linearGradient>
      <linearGradient id="MyGradient2">
        <stop offset="5%" stopColor="white" />
        <stop offset="95%" stopColor="#FDD" />
      </linearGradient>
      <linearGradient id="MyGradient3">
        <stop offset="2%" stopColor="white" />
        <stop offset="95%" stopColor="pink" />
      </linearGradient>
      <linearGradient id="MyGradient4">
        <stop offset="2%" stopColor="white" />
        <stop offset="95%" stopColor="#F9A" />
      </linearGradient>
      <linearGradient id="MyGradient5">
        <stop offset="2%" stopColor="white" />
        <stop offset="95%" stopColor="#F78" />
      </linearGradient>
      <linearGradient id="MyGradient6">
        <stop offset="2%" stopColor="white" />
        <stop offset="95%" stopColor="#E57" />
      </linearGradient>
      <linearGradient id="MyGradient7">
        <stop offset="2%" stopColor="white" />
        <stop offset="95%" stopColor="#B13" />
      </linearGradient>
      <linearGradient id="MyGradient8">
        <stop offset="2%" stopColor="white" />
        <stop offset="95%" stopColor="#812" />
      </linearGradient>
    </defs>
  )
}

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
