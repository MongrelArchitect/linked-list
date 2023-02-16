const Node = (data, next = null) => ({ data, next });

const LinkedList = () => {
  let head = null;
  let size = 0;

  const getHead = () => head;

  const getSize = () => size;

  const getTail = () => {
    if (!head) {
      return null;
    }
    let currentNode = head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  const append = (value) => {
    const newNode = Node(value);
    if (!head) {
      // We've got an empty list, so we're appending the first node
      head = newNode;
      size += 1;
    } else {
      // Traverse the list until the end and append there
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      size += 1;
    }
  };

  const prepend = (value) => {
    // New node becomes head & points to old head
    const newNode = Node(value);
    newNode.next = head;
    head = newNode;
    size += 1;
  };

  return {
    getSize, append, prepend, getHead, getTail,
  };
};

const list = LinkedList();
list.append('first');
list.append('second');
list.prepend('new-first');
list.append('last');
console.log(list.getTail());
