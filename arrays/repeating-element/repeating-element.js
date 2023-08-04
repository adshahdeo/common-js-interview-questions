function printRepeating(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let value = Math.abs(arr[i]) - 1;
        if(arr[value] < 0) {
            res.push(value + 1);
        } else {
            arr[value] = -arr[value];
        }
    }
    return res;
}

let arr = [1,2,3,4,2,3];
console.log(printRepeating(arr));