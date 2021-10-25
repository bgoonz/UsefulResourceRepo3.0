// Reverse a singly linked list

var reverseList = function(head) {
    if (!head) return null
    
    let currentNode = head;
    let previous;
    let temp;
    
    while (currentNode) {
        temp = currentNode.next;
        currentNode.next = previous;
        previous = currentNode;
        currentNode = temp;
    }
    
    return previous
    
};