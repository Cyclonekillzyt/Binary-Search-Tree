class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array) {
    const build = (arr) => {
      if (arr.length === 0) {
        return null;
      }
      const middleIndex = Math.floor(arr.length / 2);
      const node = new Node(arr[middleIndex]);

      node.left = build(arr.slice(0, middleIndex));
      node.right = build(arr.slice(middleIndex + 1));
      return node;
    };
    const sortedArray = [...new Set(array.sort((a, b) => a - b))];
    this.root = build(sortedArray);
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  insert(value) {
    const traverse = (node, value) => {
      if(node === null){
        return new Node(value);
      }
      if(value === node.value){
        return null;
      }
      if(value < node.value){
        node.left = traverse(node.left, value);
      }
      else if(value > node.value){
        node.right = traverse(node.right , value)
      }
      return node;
    };
    this.root = traverse(this.root, value);
  }
}

const tree = new Tree();
tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert (30)
tree.prettyPrint();
