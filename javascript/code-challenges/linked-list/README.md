# Singley Linked List 
### Aysia Brown

## Challenge
- The challenge was create a Linked List where every unit of the Linked List was a node that pointed to the next node. The first Node would always be assigned as the head of the Linked List, otherwise null if the list was empty. If a node's next value pointed to null then that node would be the last node in the list. 

## Approach & Efficiency 
- My approach consisted of creating a class strictly for the individual Node's first. I knew the Node had to contain a value and then a pointer variable that would be assigned to null or the next node. 
- I then started on the Linked List class which would be constructed with a head value. The head value would always be the node at the top of the list or the last inserted node. 
- The insert method included checking if a head value already existed with a node or not; if not then head value would be reassigned to a new node. 
    - if the head value was already assigned to a Node, then a new node's next value would be reassigned to point at the head value's current node. Then we reassign the head value to be pointing at the new node we inserted. 
    - This method has a O(1) run time.
- The includes method will loop through every node's next node using a while loop where the current node & next node is not null. The current node's value and next node's value will be compared against the value the method is searching for. If the value exists we exit the loop and return true; otherwise we return false. 
    - includes runs at a O(n) run time.
- The toString method works similarly to includes by looping through the entire Linked List and adding the value to a string that will be returned. 
    - toString runs at a O(n) run time. 

## API
- `LinkedList.insert()` will insert a new node at the head of the Linked List and assign it's next node as the former head's node.
- `LinkedList.includes()` will loop through the entire Linked List comparing a value to every Node value, stopping if found and returning `true`. Otherwise returning `false`. 
- `LinkedList.toString()` will print the entire contents's value of the Linked List in this notation: `{ a } -> { b } -> { c } -> NULL` 