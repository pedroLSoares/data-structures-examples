const LinkedList = require('./LinkedList');
const testLinkedList = require('./mock/testLinkedList');
// Complete this function
const nthLastNode = (linkedList, n) => {
  let nthLastNodePointer = null;
  let tailPointer = linkedList.head;
  let count = 0;

  while (tailPointer) {
    tailPointer = tailPointer.getNextNode();
    if (count >= n) {
      if (!nthLastNodePointer) {
        nthLastNodePointer = linkedList.head;
      }
      nthLastNodePointer = nthLastNodePointer.getNextNode();
    }
    count++;
  }

  return nthLastNodePointer;
};

const findMiddle = (linkedList) => {
  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;

  while (fastPointer !== null) {
    fastPointer = fastPointer.next;
    if (fastPointer !== null) {
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
    }
  }

  return slowPointer;
};

// Test your function yourself:
console.log(findMiddle(testLinkedList));

// Test your function yourself:
console.log(nthLastNode(testLinkedList, 4));

// Leave this so that we can test your code:
module.exports = nthLastNode;
