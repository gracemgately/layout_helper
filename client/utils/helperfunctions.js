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

export const LLNodeArray_ = (nodeArray) => {
    console.log('array before LLNodeArray', nodeArray)
    nodeArray.map((node, index) => {
        console.log('node', node);
        console.log('index', index)
        if (typeof(node) !== 'number' && index === 0){
            node.value = node.value
            node.nextIdx = index+1;
            node.previousIdx = null;
        }
        else if (typeof(node) !== 'number') {
            node.value = node.value
            node.nextIdx = index+1;
            node.previousIdx = index-1;
        }
    })
    nodeArray[nodeArray.length - 1].next = null;
    console.log('array after LLNodeArray', nodeArray)
    return nodeArray;
}


export const CleanArray_ = (nodeArr) => {
    nodeArr.map((node, index) => {
        node.next = null;
        node.previous = null;
    })
    return nodeArr;
}


//
//LinkedList.js
export const nodeArray_ = (nodes) => {
    // create an array of linked list from 'nodes' class(object)
    const nodeArr = []; // initialize empty nodeArr.  important!
    let oldHead = nodes.head; // this is startpoint
    // push nodes into arr until there is no more 'oldHead'
    while (oldHead !== null && oldHead !== undefined) {
      nodeArr.push(oldHead);
      oldHead = oldHead.next || null;
    }
    return nodeArr
}

//