// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue
const LinkedList = require('../LinkedList/LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (!this.hasRoom()) throw new Error('Queue is full!');

    this.queue.addToTail(data);
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('Queue is empty!');

    const data = this.queue.removeHead();
    this.size--;
    return data;
  }
}

module.exports = Queue;
