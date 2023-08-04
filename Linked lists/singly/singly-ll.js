class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor () {
        this.head = null;
        this.size = 0;
    }

    // Insert an item in head
    insertFirst (value) {
        this.head = new Node (value, this.head);
        this.size++;
    }

    // Insert an item at a position
    insertAt (value, index) {
        if(index === 0) {
            this.head = new Node(value, this.head);
            this.size++;
            return;
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }
        current.next = new Node (value, current.next);
        this.size++;
    }

    // Insert an item at the end of the list
    insertLast (value) {
        if(this.size === 0) {
            this.head = new Node (value);
            this.size++;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node (value);
        this.size++;
    }

    // Clears list
    clearList () {
        this.head = null;
        this.size = 0;
        console.log('Clearing the list');
    }

    // Remove an item given index
    removeAt (index) {
        if (this.size === 0) {
            console.log('List is empty');
            return;
        }

        if (index > this.size - 1) {
            console.log('Invalid position, please enter size between 0 and ' + this.size - 1);
            return;
        }

        if(index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let newNext;
        let i = 0;
        while (i < index - 1) {
            current = current.next;
            i++;
        }
        current.next = index === this.size - 1 ? null : current.next.next;
        this.size--;
    }

    // Search for a value and return the position
    searchValue (value) {
        if (!this.size) {
            console.log('list is empty');
            return;
        }

        let current = this.head;
        let i = 0;

        while (current !== null) {
            if (current.value === value) {
                console.log('Element found at', i);
                return i;
            }
            current = current.next;
            i++;
        }
        console.log('Element not found');
    }

    // Print the list
    printList () {
        let current = this.head;
        let printListStr = '';

        while (current) {
            printListStr += this.size > 1 ? `| ${current.value} | -> ` : current.value;
            current = current.next;
        }

        console.log(printListStr + null);
    }

    // Reverse the list
    reverseList () {
        let current = this.head;
        let tmp = [];
        while (current !== null) {
            tmp.push(current.value);
            current = current.next;
        }
        this.clearList();
        for(let i = 0; i < tmp.length; i++) {
            this.insertFirst(tmp[i]);
        }
    }
}

const ll = new LinkedList();

ll.printList();

ll.insertLast(5);
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertLast(7);
ll.insertFirst(3);
ll.insertLast(100);
ll.insertAt(20, 2);
ll.insertAt(30, 0);

ll.printList();

ll.reverseList();

ll.printList();

ll.searchValue(2);

ll.removeAt(2);
ll.printList();
ll.removeAt(0);
ll.searchValue(100);
ll.printList();
ll.removeAt(3);
ll.printList();

ll.clearList();
ll.searchValue(3);
ll.printList();
ll.removeAt(2);