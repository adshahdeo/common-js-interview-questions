class TrieTree {

    insert (word) {
        if (typeof(word) !== 'string' || !word.length) {
            return 'Please enter a valid string value';
        }
        let copyWord = word.split('');
        const searchHelper = (node) => {
            let char = copyWord.shift ();
            if (node[char] !== undefined) {
                return searchHelper (node[char]);
            } else {
                return insertHelper (node, char);
            }
        }
        const insertHelper = (node, char) => {
            if (char) {
                node[char] = {};
                return insertHelper (node[char], copyWord.shift ());
            } else {
                return true;
            }
        }

        searchHelper(this);
    }

    printTree () {
        console.log(this);
    }

    find (sequence) {
        if (typeof(sequence) !== 'string' || !sequence.length) {
            return 'Please enter a valid string value';
        }

        let copyWord = sequence.split('');
        let flag = true;
        const searchHelper = (node) => {
            let char = copyWord.shift ();
            if (!char) return;
            if (node[char] !== undefined) {
                return searchHelper (node[char]);
            } else {
                flag = false;
                return;
            }
        }
        searchHelper(this);
        console.log(flag ? 'found' : 'not found');
        return flag;
    }

    // remove (sequence) {
    //     if (typeof(sequence) !== 'string' || !sequence.length) {
    //         return 'Please enter a valid string value';
    //     }

    //     if (!this.find (sequence)) {
    //         console.log('this sequence doesn\'t exist, please enter an existing sequence');
    //         return;
    //     }

    //     let copyWord = sequence.split('');
    //     const searchHelper = (node) => {
    //         let char = copyWord.shift ();
    //         if (node[char].length > 2) {
    //             return searchHelper (node[char]);
    //         } else {
    //             return removeHelper (node, char);
    //         }
    //     }
    //     const removeHelper = (node, char) => {
    //         if (char) {
    //             node[char] = {};
    //             return insertHelper (node[char], copyWord.shift ());
    //         } else {
    //             return true;
    //         }
    //     }

    //     searchHelper(this);

    // }
};

const tree = new TrieTree ();
tree.insert('test');
tree.insert('tester');
tree.insert('trouble');
tree.insert('train');
tree.insert('arrear');
tree.insert('arrogant');
tree.insert('angry');
tree.find('test1');
tree.find ('angry')
tree.printTree();