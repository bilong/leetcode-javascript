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
    var result, node_current, node, add = 0;
    
    while ( l1 || l2 ) {
        node = new ListNode((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add);
        
        if ( add = Math.floor(node.val / 10))
            node.val = node.val % 10;
            
        if (result == null)
            result = node;
        else
            node_current.next = node;
        
        if (l1) l1 = (l1.next ? (l1 = l1.next) : null);
        if (l2) l2 = (l2.next ? (l2 = l2.next) : null);
        
        node_current = node;
    }
    
    if (add !== 0) 
        node_current.next = new ListNode(add);

    return result;
};
