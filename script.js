const Node = (data, next = null) => ({ data, next });

const LinkedList = () => {
  let head = null;

  const getHead = () => head;

  const append = (value) => {
    const newNode = Node(value);
    if (!head) {
      // We've got an empty list, so we're appending the first node
      head = newNode;
    } else {
      // Traverse the list until the end and append there
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  };

  const prepend = (value) => {
    // New node becomes head & points to old head
    const newNode = Node(value);
    newNode.next = head;
    head = newNode;
  };

  return { append, prepend, getHead };
};

const list = LinkedList();
list.append('first');
list.append('second');
list.prepend('new-first');
