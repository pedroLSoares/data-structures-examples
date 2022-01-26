const TreeNode = require('./TreeNode');

const tree = new TreeNode(10);

tree.insert(5);
tree.insert(15);
tree.insert(8);
tree.insert(7);

console.log(tree.contains(15));
tree.printInOrder();
