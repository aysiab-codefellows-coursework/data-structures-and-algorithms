# Graphs: Adjacency List
### Aysia Brown

### Challenge:
- Create a graph class by using an adjacency list where every index contained a node, and the linked list would contain all the edges of said node to other nodes in the graph.

### Approach & Efficiency
- Create a graph class that has a constructor with two properties of list that initializes to an empty array, and count that initializes to zero 
- `Graph.addNode(value)` creates a new Linked List and pushes it to list, and adds the value to that linked list as the node. The value is returned. 
    - O(1)
- `Graph.addEdge(start, end, weight)` takes three parameters of a starting node value, and an ending node value with weight being optional. The method utilizes two helper methods `.findIndex(node)` and `.appendEdge(node, index, weight)` where `.findIndex(node)` returns the index of which the given node is in the graph, and `.appendEdge(node, index, weight)` adds the edge to the proper Linked List 
    - O(n)
- `Graph.getNodes()` will iterate over every index of `this.list` and push the head into a return array.
    - O(n)
- `Graph.getNeighbors(node)` will use `.findIndex(node)` to find the index at which the node lives in the graph, and return the entire LinkedList for that node and all its edges. 
    - O(n)
- `Graph.size()` will return the number of nodes that are contained in the graph. Whenever a node is added the `this.count` property will add one to itself. 
    - O(1)


### API
- `Graph.addNode(value)` will add the value as a node to the graph. 
- `Graph.addEdge(start,end,weight)` will add the edge to the list of edges for both the starting and ending value, as well as adding the weigth to the edge. Weight is optional. 
- `Graph.getNodes()` will return an array with every node contained in the graph. 
- `Graph.getNeighbors(node)` will return the list of all edges for a given node, including their weights. 
- `Graph.size()` will return the number of nodes that are contained in the graph. 