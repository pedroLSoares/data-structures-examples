// number of non empty unival tree

const TreeNode = require('./TreeNode');

/*
        0
      1   0
         1  0
        1 1

*/

const tree = new TreeNode(0);
tree.left = new TreeNode(1);

const right0 = new TreeNode(0);
right0.right = new TreeNode(0);

const right0Left = new TreeNode(1);
right0Left.left = new TreeNode(1);
right0Left.right = new TreeNode(1);

right0.left = right0Left;

tree.right = right0;

const findSum = (tree = new TreeNode(1)) => {
  let sum = 0;

  if (!tree.left && !tree.right) return 1;

  if (tree.left.data === tree.data && tree.right.data === tree.data) {
    sum += 1;
  }

  sum += findSum(tree.left) + findSum(tree.right);

  return sum;
};

const sumTotal = findSum(tree);
console.log(sumTotal);
