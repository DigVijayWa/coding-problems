function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function Tree() {
      this.root = null;
}

Tree.prototype.addNode = function(value) {
    var node = new Node(value);
    if(this.root === null) {
        this.root = node;
    }
    else {
        var tempNode = this.root;
        while(tempNode != null) {

            if(tempNode.value < value) {
                
                if(tempNode.right != null) {
                    tempNode = tempNode.right;
                }
                else {
                    tempNode.right = node;
                    break;
                }
            }
            else if(tempNode.value >= value) {
                
                if(tempNode.left != null) {
                    tempNode = tempNode.left;
                }
                else {
                    tempNode.left = node;
                    break;
                }
            }
        }
    }
}

Tree.prototype.inOrder = function(node) {
    
    if(node != null) {
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }
}



var treeNode = new Tree();

treeNode.addNode(5);
treeNode.addNode(6);
treeNode.addNode(3);

treeNode.inOrder(treeNode.root);