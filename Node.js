class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error('Previous node must be a member of the Node class');
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

const strawberryNode = new Node('Berry Tasty');

const vanillaNode = new Node('Vanilla');

const coconutNode = new Node('Coconuts for Coconut');

strawberryNode.setNextNode(coconutNode);

vanillaNode.setNextNode(strawberryNode);

let currentNode = vanillaNode;

while (currentNode !== null) {
  console.log(currentNode.data);

  currentNode = currentNode.getNextNode();
}

module.exports = Node;
