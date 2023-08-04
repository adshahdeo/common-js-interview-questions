class Node {
    constructor (value, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value
    }
}

class BTree {
    constructor () {
        this.root = null;
    }

    findNode (val) {
        const treeNodes = this.preOrderTraverse(this.root);
        for (let i = 0; i < treeNodes.length; i++) {
            if (treeNodes[i] === val) {
                return treeNodes[i];
            }
        }

        return null;
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
        } else {
            const result = [];
            result.push (...root);
            if (root.left !== null) {
                result.push (...this.inOrderTraverse (root.left));
            }
            if (root.right !== null) {
                result.push (...this.inOrderTraverse (root.right));
            }
        }
        return result;
    }

    postOrderTraverse (root) {
        if (!root) {
            console.log(null);
            return [];
        } else {
            const result = [];
            if (root.left !== null) {
                result.push (...this.postOrderTraverse (root.left));
            }
            if (root.right !== null) {
                result.push (...this.postOrderTraverse (root.right));
            }
            result.push(root);
        }
        return result;
    }

    printTree () {
        const treeNodes = this.preOrderTraverse (this.root);
        let str = '';
        for (let node in treeNodes) {
            str += `-${treeNodes[node].value}-`;
        }

        console.log(str);
    }

    levelOrderTraverse () {
        let arr = [this.root];
        const printVal = (node) => {
            if (node.left !== null) {
                arr.push(node.left)
            }
            if (node.right !== null) {
                arr.push(node.right);
            }
            console.log(node.value);
            return;
        }
        while (arr.length > 0) {
            printVal(arr[0]);
            console.log(arr);
            return;
            arr.shift();
        }
    }

    findDepth () {
        const depthCalculator = (node, level) => {
            if (node === null) {
                return 0;
            }

            if (node.left === null && node.right === null) {
                return level;
            }

            if (node.left && node.right) {
                level = Math.max (depthCalculator (node.left, level + 1), depthCalculator (node.right, level + 1));
            } else if (node.left) {
                level = depthCalculator (node.left, level + 1);
            } else {
                level = depthCalculator (node.right, level + 1)
            }
            return level;
        }

        const depth = depthCalculator (this.root, 1);
        console.log(depth);
    }

    insertNode (val) {
        if (this.root === null) {
            this.root = new Node (val);
            return true;
        }
        const insert = (node) => {
            if (val < node.value) {
                if (node.left === null) {
                    node.left = new Node (val);
                    return;
                } else {
                    insert (node.left);
                }
            } else {
                if (node.right === null) {
                    node.right = new Node (val);
                    return;
                } else {
                    insert (node.right);
                }
            }
        }

        insert (this.root);
    }
}

const tree = new BTree();

tree.insertNode (100);
tree.insertNode (200);
tree.insertNode (150);
tree.insertNode (50);
tree.insertNode (15);
tree.insertNode (10);
tree.insertNode (5);
tree.insertNode (3);
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
tree.insertNode (25);
// console.log(tree.root);
// tree.printTree();
// tree.levelOrderTraverse();
tree.findDepth();
