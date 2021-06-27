class TreeNode {
    constructor (val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BTree {
    constructor () {
        this.root = null;
        this.size = 0;
    }

    insertLeft (val, parent) {
        if (this.root === null) {
            this.root = new TreeNode (val);
            this.size++;
            return;
        }
        if(!parent) {
            console.log('Parent is required, please enter parent');
            return;
        }
        let parentNode = this.find(parent);

        if(!parentNode) {
            console.log('The parent you entered does not exist, please enter some other value');
        }
        if (parentNode.left) {
            console.log('Left position for this parent is already occupied, please enter another parent');
            return;
        } else {
            parentNode.left = new TreeNode (val);
        }
    }

    insertRight (val, parent) {
        if (this.root === null) {
            this.root = new TreeNode (val);
            this.size++;
            return;
        }
        if(!parent) {
            console.log('Parent is required, please enter parent');
            return;
        }
        let parentNode = this.find(parent);
        if(!parentNode) {
            console.log('The parent you entered does not exist, please enter some other value');
        }
        if (parentNode.right) {
            console.log('Right position for this parent is already occupied, please enter another parent');
            return;
        } else {
            parentNode.right = new TreeNode (val);
        }
    }

    preOrderTraverse (root) {
        if (!root) {
            console.log(null);
            return [];
        }

        const result = [];
        if (root.left !== null) {
            result.push (...this.preOrderTraverse (root.left));
        }
        result.push(root);
        if (root.right !== null) {
            result.push (...this.preOrderTraverse (root.right));
        }

        return result;
    }

    inOrderTraverse (root) {
        if (!root) {
            console.log(null);
            return [];
        }

        const result = [];

        result.push(root);
        if (root.left !== null) {
            result.push (...this.inOrderTraverse (root.left));
        }

        if (root.right !== null) {
            result.push (...this.inOrderTraverse (root.right));
        }

        return result;
    }

    postOrderTraverse (root) {
        if (!root) {
            console.log(null);
            return [];
        }

        const result = [];
        if (root.left !== null) {
            result.push (...this.inOrderTraverse (root.left));
        }
        if (root.right !== null) {
            result.push (...this.inOrderTraverse (root.right));
        }
        result.push(root);

        return result;
    }

    find (val) {
        const nodes = this.preOrderTraverse (this.root);
        for (let i = 0; i < nodes.length; i++) {
            if (val === nodes[i].val) return nodes[i];
        }

        return false;
    }

    insertNode (val) {
        if (this.root === null) {
            this.root = new TreeNode (val);
            return true;
        }
        const insert = (node) => {
            if (val < node.val) {
                if (node.left === null) {
                    node.left = new TreeNode (val);
                    return;
                } else {
                    insert (node.left);
                }
            } else {
                if (node.right === null) {
                    node.right = new TreeNode (val);
                    return;
                } else {
                    insert (node.right);
                }
            }
        }

        insert (this.root);
    }

    printTree () {
        const treeNodesArray = this.inOrderTraverse(this.root);
        let str = '';
        for (let i = 0; i < treeNodesArray.length; i++) {
            str += `-${treeNodesArray[i].val}-`;
        }
        console.log(str);
    }
    
}

const tree = new BTree ();

tree.insertLeft (10);
tree.insertRight (6, 10);
tree.insertRight (7, 6);
tree.insertLeft (5, 10);
tree.insertLeft (3, 5);
tree.insertLeft (1, 3);
tree.insertRight (2, 3);
tree.insertRight (4, 5);
tree.insertNode(8);
tree.insertNode (150);
tree.insertNode (50);
tree.insertNode (15);
tree.insertNode (10);
tree.insertNode (5);
tree.insertNode (3);
tree.insertNode (150);
tree.insertNode (35);
tree.insertNode (40);
tree.insertNode (45);
tree.insertNode (48);
tree.insertNode (250);
tree.insertNode (300);
tree.insertNode (360);
tree.insertNode (400);
tree.insertNode (450);
tree.insertNode (6);
tree.insertNode (7);
tree.insertNode (14);
tree.insertNode (20);
tree.insertNode (22);
tree.printTree()