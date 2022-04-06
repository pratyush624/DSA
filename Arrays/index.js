class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /** for accessing the data */
  get(index) {
    return this.data[index];
  }

  /** adding item to the end of an array */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  /** for removing last item from an array */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /** for deleting item from the specific index */
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  /** for shifting the the index of item after deletion */
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      // shifting the item to the left by 1
      // the left item got replaced by right item
      // [10,20] => [20,20]
      this.data[i] = this.data[i + 1];
    }
    // [20,20] => [20]
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push(10);
newArray.push(20);
newArray.push(30);
console.log(newArray);
// newArray.pop();
newArray.delete(0);
console.log(newArray);
