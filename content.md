# Queue ADT

The Queue ADT is a container for multiple elements. Those elements are ordered (i.e., they are arranged in a sequence) and may repeat (unlike a mathematical set)


# Linked List DS

A Linked List is a data structure, meaning a concrete programmatic way of managing information in memory. They can be used to implement a number of ADTs, including Queues, Stacks, Lists, and others.

Linked Lists are collections of nodes — wrapper structures which encapsulate a value and one or more pointers (references) to other nodes. The Linked List instance typically only has a reference to a so-called handle node, e.g. the head (first node) — it has no direct knowledge of other nodes in the list. However, the handle then points to a next node, which itself points to another next node, and so on and so forth. A list ends when a node's next pointer is null or undefined. The act of starting from a handle and visiting nodes in sequence is known as "traversing" a linked list.

Linked Lists can come in various flavors. For example, in doubly-linked lists, each node might point both to the next node and to the previous node as well. In some variations, the parent Linked List instance might maintain both head and tail references.

# Binary Search Tree DS

Trees are powerful data structures which solve myriad computer science problems. A Binary Tree is one for which every node has up to two children, a left and/or right child. It is a Search tree if all nodes respect an order: all values less than a given node value are in its left subtree, and all values greater or equal to a given node value are stored in its right subtree. Trees are very recursive structures; for a given root node, the left child node is the root of a subtree and the right child node is the root of a subtree.

The excellent quality of BSTs is how quickly they can insert or find a particular value. For example, to get the minimum value in a BST, you have only to keep taking the left path downwards. For every node you jump, you are on average throwing away half of the remaining nodes in your search! This means that for a (balanced) tree of n nodes, you will find the minimum in an average of log2(n) moves.

## tree traversal

### Breadth-first:
start at level 0, then go through all nodes at level 1, then all nodes at level 2, etc. This is meaningful when tree level actually has some meaning; for example, a hierarchical org chart. It is less useful for a BST, where levels don't usually have intrinsic meaning.

### Depth-first:
go down paths to certain stopping points before moving on to the next branch.

Three types:

### pre-order:
process the current node value, then go down the left branch, then the right branch. This processes parents before leaves, so can be used to copy a tree.

### in-order:
process all the left children (lesser values), then this node's value, then the right children (greater values). This is the most useful for a BST as it respects the intrinsic ordering of the tree; values are processed from smallest to greatest.

### post-order:
process all the left children, then right children, then this node's value. This processes leaves before parents, so can be used in languages with explicit memory management to delete nodes in a safe way.

# Hash Table DS

Hash Tables are a data structure used to implement a Dictionary, Associative Array, or other entity that allows dynamically storing and retrieving values via string keys.

