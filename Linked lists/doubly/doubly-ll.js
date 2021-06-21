class Node {
    constructor (value, previous = null, next = null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class DoublyLL {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    // Add a node to end of the list
    push (value) {
        if (this.head === null) {
            this.head = new Node (value);
            this.size++;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = new Node (value, current);
        this.size++;
    }

    // Insert a node at start of the list
    insertFirst (value) {
        const newNode = new Node (value, null, this.head);
        if(this.head === null) {
            this.head = newNode;
            this.size++;
            return;
        }
        this.head.previous = newNode;
        this.head = newNode;
        this.size++;
    }

    // Insert a node at any position
    insertAt (value, index) {
        if (index < 0 || index > this.size - 1) {
            console.log('invalid index');
            return;
        }
        if (index === 0) {
            this.insertFirst(value);
            return;
        }
        if (index === this.size - 1) {
            this.push(value);
            return;
        }

        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.next;
            i++;
        }

        const newNode = new Node (value, current.previous, current);
        current.previous.next = newNode;
        current.previous = newNode;
        this.size++;
    }    

    // Remove a node from end of the list
    pop () {
        if (this.head === null) {
            console.log('Empty list, nothing to pop!');
            return;
        }
        if (this.size === 1) {
            this.head = null;
            this.size = 0;
            return;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }

        current.next = null;
        this.size--;
    }

    // Remove the first node
    removeFirst () {
        if(this.head === null) {
            console.log('list is empty, nothing to remove');
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            this.size = 0;
            return;
        }
        this.head.next.previous = null;
        this.head = this.head.next;
        this.size--;
    }

    // Removes node at an index
    removeAt (index) {
        if (index < 0 || index > this.size - 1) {
            console.log('invalid index');
            return;
        }
        if (index === 0) {
            this.removeFirst();
            return;
        }
        if (index === this.size - 1) {
            this.pop();
            return;
        }

        let current = this.head;
        let i = 0;

        while (i <= index) {
            current = current.next;
            i++;
        }

        current.previous.next = current.next;
        current.next.previous = current.previous;
        this.size--;
    }

    // Clears the list
    clearList () {
        this.head = null;
        this.size = 0;
    }

    // Print the list
    printList () {
        if(this.head === null) {
            console.log(null);
            return;
        }
        let current = this.head;
        let listStr = 'null';
        while (current !== null) {
            listStr += ` <- | ${current.value} | -> `;
            current = current.next;
        }

        listStr += 'null';
        console.log(listStr);
    }
}

const list = new DoublyLL();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.printList();
list.pop();
list.insertFirst(100);
list.printList();
list.removeFirst();
list.printList();
list.insertAt(40, 3);
list.printList();
list.removeAt(3);
list.printList();