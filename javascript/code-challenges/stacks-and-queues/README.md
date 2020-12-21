# Stacks & Queues
### Aysia Brown

## Challenge
- The challenge was to create two separate data structures (a Stack, and a Queue) where they were a connection of Nodes pointing to the next node. A Stack had to follow a 'First In Last Out' structure whereas a Queue followed a 'First In, First Out' strucutre. 

## Approach & Efficiency 
- Initially, I created a class Node that contains a value and a next property. 

### Stack
- `Stack` has a property top that keeps track of the top of the stack
- `Stack.push(value)` first checks if there is a Node already at the top of the stack. If not the top property is assigned to a new Node with the given value. If so, the new Node's next is assigned to the current top value, and then top is assigned to be our newest Node. 
    - O(1) run time.
- `Stack.pop()` first checks if the top property is null, if it is an exception is thrown. However, if there is a top value it is assigned to a new variable to be returned. The top propeprty is then assigned to it's next Node.
    - O(1) run time.
- `Stack.peek()` first checks if the top property is null, if it is an exception is thrown. However, if the top property is assigned, then we return the value of it.
    - O(1) run time.
- `Stack.isEmpty()` checks if the top property is not null, if so then we return false. If the top property is null, the stack is empty and return true. 
    - O(1) run time.

### Queue
- `Queue` has two properties front and back. Front keeps a reference to the front of the queue and back keeps a reference to the end of the queue. 
- `Queue.enqueue()`first checks if there is a Node already at the front of the queue. If not the front property is assigned to a new Node with the given value, as well as the back property. If so, the new Node's next is assigned to the current back value, and then back is assigned to be our newest Node. 
    - O(1) run time.
- `Queue.dequeue()` first checks if there is a Node already at the front of the queue or not. If not, an exception is thrown declaring the queue is empty. However if there is a node a the front of the queue, we reassign it to a temporary return variable. To reassign the front of the queue, we then enter a while loop that goes until the current node is equal to the old front. Within the loop, if the current node's next is the equal to the original front node, we reassign the front to the current node. 
    - O(n) run time.
- `Queue.peek()` first cheks if the front propeorty of the queue is null. If so, then an exception is thrown. However, if the front property is assigned, then we retunr the value of it.
- `Queue.isEmpty()` checks if the front properoty is not null, if so then we return false. If the front property is null then the stack is empty and we return true/
    - O(1) run time.


## API
### Stack
- `Stack.push(value)` pushes a new value into a new Node and adds it to the top of the stack.
- `Stack.pop()` pops off and removes the Node at the top of the stack and returns its value
- `Stack.peek()` returns the value of the Node at the top of the stack only
- `Stack.isEmpty()` returns `true` if the stack is empty, and `false` if the stack contains nodes

### Queue
- `Queue.enqueue(value)` enqueues a value into a new Node and adds it to the end of the queue. 
- `Queue.dequeue()` dequeues and removes the Node at the front of the queue and returns its value
- `Queue.peek()` returns  the value of the Node at the front of the queue only
- `Queue.isEmpty()` returns `true` if the queue is empty, and `false` if the queue contains nodes