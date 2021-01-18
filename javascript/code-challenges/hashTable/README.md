# Hash Tables
### Aysia Brown

### Challenge
- the challenge was to create a HashTable data structure, that takas a key and hashes it into a numeric index, thus placing the key:value pair into that index. However, multiple keys could hash into the same index, and to account for collisions each index would be used as more of a bucket that held a Linked List where we would then store our key:value pairs.

### Approach & Efficiency
- `HashTable.hash(key)` is really only used internally to take a key, and turn it into a numeric index by adding all the ASCII values of the string together, multiplying it by a prime number of 599 and dividing it by 1024. 
    - O(n) run time because we loop through the length of the key string
- `HashTable.add(key,value)` utilizes `this.hash(key)` and finds the array index corresponding to the returned hash value. If the index is empty, we will instantiate a new LinkedList to avoid future collisions, otherwise we will insert our `{[key]: value}` object into the next node value in the linked list
    - O(n) run time because of the hash function
- `HashTable.get(key)` searches for the key by first going to the hashed index, and iterating over the LinkedList starting at the head, and using a while loop looking for the corresponding key either returning the value or null
    - O(n) run time because of the hash function
- `Hash.contains(key)` depends on `this.get(key)`, returning true if a value is returned or false if the value returned is null 
    - O(n) run time 

### API
- `HashTable.hash(key)` returns a numeric value to be used in all the other internal methods 
- `HashTable.add(key, value)` will add the new key:value pair to the HashTable at the appropriate bucket index 
- `HashTable.get(key)` will search the hash table for the given key and return the value if the key exists, or null if the key does not exist
- `HashTable.contains(key)` will search the hash table for the given key and return true if the key exists, otherwise false