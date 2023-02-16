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

  return { append, getHead };
};

const list = LinkedList();
list.append('first');
list.append('second');
