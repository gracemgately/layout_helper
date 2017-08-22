//SaveDSForm:

export const breadthFirstForEach_ = (BST) => {

  let queue = [BST];
  let collection = [];
  let counter = 0;
  while (counter < 65) {
//counter set to 65 to avoid infinite loop -- to be changed later
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

  return collection;

}

export const groupBstNodes = arr => {

  let groups = []; // initialize array


  /* [...Array(10).keys()]
  //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  */

  const level = [
    ["root"],
    [0],
    [1, 2],
    [...Array(8).keys()].slice(3, 7), // INDEX 3.. 6
    [...Array(16).keys()].slice(7, 15), // 7...14
    [...Array(31).keys()].slice(15, 31), // 15...30
    [...Array(31).keys()].slice(31, 63) // 31...62
  ]

  arr.map(([node, parentIdx]) => {
    const foundLevel = level.findIndex( (el) => {
      return el.includes(parentIdx);
    })
    if (!groups[foundLevel]) {
      groups[foundLevel] = [node];
    } else {
      groups[foundLevel].push(node);
    }
  })

  return groups;

}

export const arrayifyBst = (BST) => {

  let startTime = new Date();
  let queue = [BST];
  let collection = [];
  let counter = 0;
  while (counter < 65) {
    //counter set to 65 to avoid infinite loop -- 2^6 = 64
    let current = queue.shift();
    (current.left) ? queue.push(current.left) : queue.push("empty");
    (current.right) ? queue.push(current.right) : queue.push("empty");

    collection.push({
      value: current.value,
      left: childrenIdx(counter)[0],
      right: childrenIdx(counter)[1],
      parent: parentIdx(counter)
    });
    counter++;
  }
  console.log('arrayfybst ', collection);

  console.log('time it takes arrayify to run', new Date() - startTime);

  return collection;
}


export const removeEmptyChildren = (collection) => {

  let startTime = new Date();


    if (collection === undefined) return [];

    const arrWithNullChildren = collection.slice(0);
    let length = collection.length;
    let i = 0;

    while(i < length){
      let node = arrWithNullChildren[i];
      if (!node.value || node.left > length) {
        arrWithNullChildren[i].left = null;
        arrWithNullChildren[i].right = null;
      }
      i++;
    }

    let filteredCollection = arrWithNullChildren.slice(0);

    // remove orphan nodes
    for (let k = filteredCollection.length - 1; k >= 0; k--){
      if (filteredCollection[k].value === undefined) {
        filteredCollection.pop();
      }
      else break;
    }

    console.log('time it takes removeEmptyChildren to run', new Date() - startTime);

    return filteredCollection;

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
    nodeArray.map((node, index) => {
        if (index === 0){
            node.value = node.value
            node.next = index+1;
            node.previous = null;
        }
        else {
            node.value = node.value
            node.next = index+1;
            node.previous = index-1;
        }
    })
    nodeArray[nodeArray.length - 1].next = null;
    return nodeArray;
}

//
//LinkedList.js
export const nodeArray_ = (nodes) => {
    // create an array of linked list from 'nodes' class(object)
    const nodeArr = []; // initialize empty nodeArr.  important!
    let currentNode = nodes.head; // this is startpoint
    // push nodes into arr until there is no more 'oldHead'
    while (currentNode) {
      nodeArr.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodeArr
}

//
//SingleUserDS.js
  export const _Time = (stringDate) => {
    const YYYYMMDD = stringDate.slice(0,10).split('-');
    return YYYYMMDD[1] + '-' + YYYYMMDD[2] + '-' + YYYYMMDD[0];
  }

//
//singleuserds.js

  export const deleteFromArray = (DSarray, DSId) => {
    for (let i = 0; i < DSarray.length; i++) {
        if (DSarray[i].id === DSId) {
            DSarray.splice(i, 1);
        }
    }
    return DSarray;
}

//


export const getRandomNumbersArr = () => {
  const length = Math.floor((Math.random() * 5) + 5); // random length between 1 and 20
  let arr = [];
  // create an array of unique integers
  for (let i = 0; i < length; i++){
    let randomNum = Math.floor((Math.random() * 20) + 1);
    if (arr.indexOf(randomNum) !== -1) randomNum = 21 + i;
    arr.push(randomNum);
  }
  console.log('arr ', arr);
  return arr;
}
