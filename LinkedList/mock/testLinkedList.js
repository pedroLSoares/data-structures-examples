const Node = require('../../Node');
const LinkedList = require('../LinkedList');

function getTestLinkedList() {
  const linkedList = new LinkedList();

  [...Array(50).keys()].map((i) => linkedList.addToHead(new Node(i)));

  return linkedList;
}

module.exports = getTestLinkedList();
