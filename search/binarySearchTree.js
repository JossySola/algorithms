class BinaryTree {
    constructor(value, depth = 1) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (!this.left) {
          this.left = new BinaryTree(value, this.depth + 1);
        } else {
          this.left.insert(value);
        }
      } else {
        if (!this.right) {
          this.right = new BinaryTree(value, this.depth + 1);
        } else {
          this.right.insert(value);
        }
      }
    }
    
    getNodeByValue(value) {
      if (this.value === value) {
        return this;
      } else if ((this.left) && (value < this.value)) {
          return this.left.getNodeByValue(value);
      } else if (this.right) {
          return this.right.getNodeByValue(value);
      } else {
        return null;
      }
    }
  
    depthFirstTraversal() {
      if(this.left) {
        this.left.depthFirstTraversal();
      }
      console.log(this.value);
      console.log(this.depth);
      if(this.right) {
        this.right.depthFirstTraversal();
      }
    }
};

const bt = new BinaryTree(15);
let numbers = [ 12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25 ];

for (let i = 0; i < numbers.length; i++) {
  bt.insert(numbers[i]);
  console.log(`Insert ${numbers[i]} to binary tree`);
}

console.log('Depth First Traversal');
bt.depthFirstTraversal();