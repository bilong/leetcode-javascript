/**
 * Author: Bilong HUANG
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   var result, node, node_current, add = 0;
    
    while ( l1 || l2 ) {
        node_current = new ListNode((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add);
        if ( add = Math.floor(node_current.val / 10))
            node_current.val = node_current.val % 10;
        if (result == null) {
            result = node_current;
        } else {
            node.next = node_current;
        }
        node = node_current;
        if (l1)
            l1 = (l1.next ? (l1 = l1.next) : null);
        if (l2)
            l2 = (l2.next ? (l2 = l2.next) : null);
    }
    
    if (add != 0) {
        node_current = new ListNode(add);
        node.next = node_current;
    }
    return result;
};
