type LinkNode = {
  order: number;
  next: any;
};

class LinkList {
  head: LinkNode | null;
  tail: LinkNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNodeTail = (node: LinkNode) => {
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    if (this.head && !this.head.next) {
      this.tail = node;
      this.head.next = node;
      return;
    }
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      return;
    }
  };

  addNodeHead = (node: LinkNode) => {
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    if (this.head && !this.head.next) {
      this.tail = this.head;
      this.head = node;
      this.head.next = this.tail;
      return;
    }
    if (this.tail) {
      const tempHead = this.head;
      this.head = node;
      this.head.next = tempHead;
      return;
    }
  };

  findNode = (order: number) => {
    let currentNode = this.head;

    for (let index = 0; index < this.length; index++) {
      if (currentNode?.order === order) {
        return currentNode;
      }
      currentNode = currentNode?.next;
    }
  };

  deleteNode = (order: number) => {
    let currentNode = this.head;
    let prevNode: null | LinkNode = null;

    for (let index = 0; index < this.length; index++) {
      if (currentNode?.order === order) {
        if (prevNode) {
          prevNode.next = currentNode.next;
          return;
        }
        this.head = currentNode.next;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode?.next;
    }
  };
}

const firstNode = {
  order: 1,
  next: null,
};

const secondNode = {
  order: 2,
  next: null,
};

const thirdNode = {
  order: 3,
  next: null,
};

const fourthNode = {
  order: 4,
  next: null,
};

const headNode = {
  order: 0,
  next: null,
};

const MyList = new LinkList();
MyList.addNodeTail(firstNode);
MyList.addNodeTail(secondNode);
MyList.addNodeTail(thirdNode);
MyList.addNodeTail(fourthNode);
MyList.addNodeHead(headNode);

MyList.deleteNode(0);
console.log(MyList.head);
