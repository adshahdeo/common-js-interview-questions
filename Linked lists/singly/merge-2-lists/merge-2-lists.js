var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode();
    let listCur = newList;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            listCur.next = new ListNode(l1.val);
            l1 = l1.next;   
        } else {
            listCur.next = new ListNode(l2.val);          
            l2 = l2.next;   
        }
        listCur = listCur.next;
    }
    listCur.next = l1 || l2;
    newList = newList.next;
    return newList;
};