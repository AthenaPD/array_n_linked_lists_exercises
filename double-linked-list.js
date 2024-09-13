// Node: node for a doubly linked list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */
    push(val) {
        let newNode = new Node(val);

        if (this.head === null) this.head = newNode;
        if (this.tail !== null) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length += 1;
    }

    /** unshift(val): add new value to start of list. */
    
    unshift(val) {
        let newNode = new Node(val);
        if (this.length !== 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.head = newNode;
        this.length += 1;
    }

    /** pop(): return & remove last item. */
    pop() {
        if (this.length === 0) return null;
        let lastNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Find second to last item
            let secondLast = this.tail.prev;      
            this.tail = secondLast;
            this.tail.next = null;
        }
      
        this.length -= 1;
        return lastNode.val;
    }

    /** shift(): return & remove first item. */
    shift() {
        if (this.head === null) return null; // empty list

        let firstNode = this.head;
        this.head = this.head.next;

        // This means there was only one item in the list, so after removing it, both head and tail should be null
        if (this.head === null) this.tail = null;

        this.length -= 1;
        return firstNode.val;
    }

    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if (idx >= this.length) throw new Error("Index is out of bound!");

        let midIdx = Math.round(this.length / 2);
        let nodeAtIdx;
        if (idx < midIdx) { // if item is in the first half of the linked list.
            nodeAtIdx = this.head;

            for (let i = 0; i < idx; i++) {
                nodeAtIdx = nodeAtIdx.next;
              }
        } else { //  if item is in the second half of the linked list.
            nodeAtIdx = this.tail;

            for (let i = this.length - 1; i > idx; i--) {
                nodeAtIdx = nodeAtIdx.prev;
            }
        }

        return nodeAtIdx.val;
    }
    
    /** setAt(idx, val): set val at idx to val */
    setAt(idx, val) {
        if (idx >= this.length) throw new Error("Index is out of bound!");

        let midIdx = Math.round(this.length / 2);
        let nodeAtIdx;
        if (idx < midIdx) { // if item is in the first half of the linked list.
            nodeAtIdx = this.head;

            for (let i = 0; i < idx; i++) {
                nodeAtIdx = nodeAtIdx.next;
              }
        } else { //  if item is in the second half of the linked list.
            nodeAtIdx = this.tail;
            for (let i = this.length - 1; i > idx; i--) {
                nodeAtIdx = nodeAtIdx.prev;
            }
        }
        nodeAtIdx.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) {
        if (idx > this.length || idx < 0) throw new Error("Index is out of bound!");

        let newNode = new Node(val)

        if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
        } else if (idx === this.length) {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        } else {
            let midIdx = Math.round(this.length / 2);

            let prevNode;
            if (idx < midIdx) {
                prevNode = this.head;
                for (let i = 0; i < idx - 1; i++) {
                    prevNode = prevNode.next;
                }
            } else {
                prevNode = this.tail;
                for (let i = this.length; i > idx; i--) {
                    prevNode = prevNode.prev;
                }
            }

            newNode.next = prevNode.next;
            newNode.prev = prevNode;
            prevNode.next.prev = newNode;
            prevNode.next = newNode;
        }
        this.length += 1;
    }

    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {
        if (idx >= this.length || idx < 0) throw new Error("Index is out of bound!");

        let nodeAtIdx;
        if (idx === 0) { // removing the first node
            nodeAtIdx = this.head;
        
            if (nodeAtIdx.next === null) this.tail = null;
        
            this.head = this.head.next;
        } else { // removing any node that is not the head.
            let midIdx = Math.round(this.length / 2);
            if (idx < midIdx) {
                let prevNode = this.head;

                for (let i = 0; i < idx - 1; i++) {
                    prevNode = prevNode.next
                  }
            } else {
                let prevNode = this.tail;

                for (let i = this.length; i > idx; i--) {
                    prevNode = prevNode.prev;
                }
            }
    
            nodeAtIdx = prevNode.next;
            prevNode.next = nodeAtIdx.next;
            nodeAtIdx.next.prev = prevNode;
        }
    
        this.length -= 1;
        return nodeAtIdx;
    }

    /** average(): return an average of all values in the list */
    average() {
        if (this.length === 0) return 0;

        let current = this.head;
        let sum = current.val;
        while (current.next !== null) {
          current = current.next;
          sum = sum + current.val;
        }
  
        return sum / this.length;
    }
}
