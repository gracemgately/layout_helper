//SaveDSForm: 

export const breadthFirstForEach_ = (BST) => {

  let queue = [BST];
  let collection = [];
  let counter = 0;
  while (counter < 40) {
//counter set to 40 to avoid infinite loop -- to be changed later
    let current = queue.shift();
    (current.left) ?  queue.push(current.left) : queue.push("empty");
    (current.right) ? queue.push(current.right) : queue.push("empty");

    collection.push({
      value: current.value,
      left: childrenIdx(counter)[0],
      right: childrenIdx(counter)[1],
      parent: parentIdx(counter)
    });
    counter++;
  }
  console.log('collection ', collection);
  return collection;

}

function parentIdx(childIdx) {
  if (childIdx === 0) return null;
  return Math.floor( (childIdx-1) / 2)
}


function childrenIdx(parentIdx) {
  return [parentIdx * 2 + 1, (parentIdx + 1) * 2]
}

//
//SaveLLForm.js

export const LLNodeArray = (nodeArray) => {
    nodeArray.map((node, index) => {
        if (index === nodeArray.length - 1){
            node.next = null;
            node.previous = index-1;
        }
        else if (index === 0){
            node.next = index+1;
            node.previous = null;
        }
        else {
            node.next = index+1;
            node.previous = index-1;
        }
    })
    return nodeArray;
}

//