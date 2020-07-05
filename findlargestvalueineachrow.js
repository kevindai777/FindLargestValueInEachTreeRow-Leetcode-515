//Objective is to find the largest value in each row in a binary tree.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 5)
tree.addLeftNode(tree.root.left, 3)
tree.addRightNode(tree.root.right, 6)
tree.addRightNode(tree.root.left, 4)


//O(n) solution with a solution similar to 'Binary Tree Level Order Traversal'
//just with one extra step.

let result = []

function dfs(node,level) {
    if (!node) {
        return
    }
        
    let arr = result[level]
    if (!arr) {
        arr = []
        result[level] = arr
    }
    arr.push(node.val)
        
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
}
dfs(tree.root, 0)
    
let finalResult = []
    
for (let arr of result) {
    finalResult.push(Math.max(...arr))
}
    
return finalResult