var mergeKLists = function(lists) {
    let listArr = [];
    let newList = new ListNode();
    let newCur = newList;
    for (let i in lists) {
        while (lists[i]) {
            listArr.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    listArr = listArr.sort((a,b)=>a-b)
    for (let i in listArr) {
        newCur.next = new ListNode(listArr[i]);
        newCur = newCur.next;
    }
    return newList.next;
};
