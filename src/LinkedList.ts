import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

const errPrefix = 'LinkedList: ';
const error = {
  empty: errPrefix + 'List is empty!',
  notFound: errPrefix + 'Index out of bounds!'
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;
    while(node.next) {
      length += 1;
      node = node.next;
    }

    return length;
  }

  add(data: number): this {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let tail = this.head;
    while(tail.next) {
      tail = tail.next;
    }

    tail.next = node;

    return this;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error(error.notFound);
    }

    let counter = 0;
    let node: Node | null = this.head;
    while(node) {
      if (counter === index) {
        return node;
      }

      counter += 1;
      node = node.next;
    }

    throw new Error(error.notFound);
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error(error.empty);
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): string {
    if (!this.head) return '';

    const nodes = [];
    let node: Node | null = this.head;
    while(node) {
      nodes.push(node.data);
      node = node.next;
    }

    return nodes.join(', ');
  }
}