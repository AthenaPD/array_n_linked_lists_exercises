/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
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

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head !== null) newNode.next = this.head;
    else this.tail = newNode; // If list is empty.

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
      let secondLast = this.head;

      while (secondLast.next.next !== null) {
        secondLast = secondLast.next;
      }

      this.tail = secondLast;
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
    else {
      let nodeAtIdx = this.head;

      for (let i = 0; i < idx; i++) {
        nodeAtIdx = nodeAtIdx.next;
      }

      return nodeAtIdx.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length) throw new Error("Index is out of bound!");
    else {
      let nodeAtIdx = this.head;

      for (let i = 0; i < idx; i++) {
        nodeAtIdx = nodeAtIdx.next;
      }

      nodeAtIdx.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error("Index is out of bound!");
    else {
      let newNode = new Node(val)

      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else if (idx === this.length) {
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let prevNode = this.head;
        for (let i = 0; i < idx - 1; i++) {
          prevNode = prevNode.next;
        }
        newNode.next = prevNode.next;
        prevNode.next = newNode;
      }
      this.length += 1;
    }
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
      let prevNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        prevNode = prevNode.next
      }

      nodeAtIdx = prevNode.next;
      prevNode.next = nodeAtIdx.next;
    }

    this.length -= 1;
    return nodeAtIdx;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    else {
      let current = this.head;
      let sum = current.val;
      while (current.next !== null) {
        current = current.next;
        sum = sum + current.val;
      }

      return sum / this.length;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }

  pivot(val) {
    let prev = null;
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (current.val >= val) {
        if (current === this.head) {
          this.head = this.head.next;
        } else {
          prev.next = current.next;
        }
        this.tail.next = current;
        this.tail = current;
      } else {
        prev = current;
      }

      current = current.next;
    }

    this.tail.next = null;
    return this;
  }

  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}

function sortTwoLinkedLists(ll1, ll2) {
    
}
// module.exports = LinkedList;
