class CircularArray {
    constructor(vals=[]) {
        this.array = [];
        this.head = 0;
        
        for (let val of vals) this.array.push(val);
        this.length = this.array.length;
    }

    addItem(val) {
        if (this.head === 0) this.array.push(val);
        else {
            this.array = [...this.array.slice(0, this.head), val, ...this.array.splice(this.head)];
            this.head += 1;
            // console.log(this.array);
        }
        this.length += 1;
    }

    printArray() {
        for (let i = this.head; i < this.length; i++) console.log(this.array[i]);
        for (let i = 0; i < this.head; i++) console.log(this.array[i]);
    }

    getByIndex(idx) {
        if (idx > this.length) return null;
        let trueIdx = idx + this.head;
        if (trueIdx >= this.length) trueIdx = trueIdx - this.length; 
        return this.array[trueIdx];
    }

    rotate(num) {
        this.head = (this.head + num % this.length) % this.length;

        if (this.head < 0) this.head = this.length + this.head;
    }
}