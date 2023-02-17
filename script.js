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

  const atIndex = (index) => {
    let currentNode = head;
    for (let i = 0; i < index; i += 1) {
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
    // Add new node which becomes head & points to old head
    const newNode = Node(value);
    newNode.next = head;
    head = newNode;
    size += 1;
  };

  const pop = () => {
    // Remove last node
    const lastIndex = size - 1;
    const penultimate = atIndex(lastIndex - 1);
    penultimate.next = null;
    size -= 1;
  };

  const contains = (value) => {
    if (!head) {
      // List is empty so obviously value isn't there
      return false;
    }

    // Check the first & last nodes
    if (head.data === value || getTail().data === value) {
      return true;
    }

    // Check all others
    let currentNode = head;
    while (currentNode.next) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    // No joy
    return false;
  };

  const find = (value) => {
    if (!head) {
      // List is empty so obviously value isn't there
      return null;
    }

    // Traverse list to find the value
    let currentNode = head;
    for (let i = 0; i < size; i += 1) {
      if (currentNode.data === value) {
        return i;
      }
      currentNode = currentNode.next;
    }

    // No joy
    return null;
  };

  const toString = () => {
    // No head, so no list to show;
    if (!head) {
      return null;
    }

    let string = '';
    let currentNode = head;
    // Loop through 'em all & build up the string
    for (let i = 0; i < size; i += 1) {
      string += `(${currentNode.data})`;
      if (currentNode.next) {
        string += ' -> ';
        currentNode = currentNode.next;
      } else {
        string += ' -> null';
      }
    }
    return string;
  };

  const insertAt = (value, index) => {
    const newNode = Node(value);
    const replacedNode = atIndex(index);
    // Indexes too small or large will just prepend or append
    if (index <= 0) {
      prepend(value);
    } else if (index >= size) {
      append(value);
    } else {
      // Gotta rearrange pointers
      const prevNode = atIndex(index - 1);
      prevNode.next = newNode;
      newNode.next = replacedNode;
      size += 1;
    }
  };

  const removeAt = (i) => {
    let index = i;
    // Too large index will just remove the last node
    if (index >= size) {
      index = size - 1;
    }
    // Zero or less index removes the first node
    if (index <= 0) {
      const nextNode = head.next;
      head = nextNode;
    } else {
      // Shuffle pointers around
      const prevNode = atIndex(index - 1);
      const nextNode = atIndex(index + 1);
      prevNode.next = nextNode;
    }
    size -= 1;
  };

  return {
    append,
    atIndex,
    contains,
    find,
    getHead,
    getSize,
    getTail,
    insertAt,
    pop,
    prepend,
    removeAt,
    toString,
  };
};
