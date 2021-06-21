let arr = [2,1,3,9,5,12,6,5,2,13,1,7,11,9,0,12,45];

const kthLargestEl = (k, arr) => {
    arr = [...new Set(arr)];
    let newArr = [];
    if (k > arr.length) return false;
    for (let i = 0; i < arr.length; i++) {
        if(!newArr.length) {
            newArr.push(arr[i]);
        } else {
            const index = compare(arr[i], newArr);
            newArr.splice(index, 0, arr[i]);
            if (newArr.length - 1 >= k) {
                newArr.shift();
            }
        }
    }
    return newArr[0];

}

const compare = (el, newArr) => {
    for(let i = newArr.length - 1; i >= 0; i--) {
        if(el > newArr[i]) {
            return i+1;
        }
    }
}

console.log(kthLargestEl(5, arr));