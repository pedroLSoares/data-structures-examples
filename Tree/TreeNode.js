// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree
class TreeNode {
  left = null;
  right = null;

  constructor(data) {
    this.data = data;
  }

  insert(value) {
    if (value <= this.data) {
      if (this.left === null) {
        this.left = new TreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (this.data === value) return true;

    if (value <= this.data) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  printInOrder() {
    if (this.left !== null) {
      this.left.printInOrder();
    }

    console.log(this.data);

    if (this.right !== null) {
      this.right.printInOrder();
    }
  }
}

module.exports = TreeNode;
