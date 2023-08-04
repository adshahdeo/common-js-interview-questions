const arr1 = [2,5,7,77,81,89,92,93,94];
const arr2 = [1,3,42,6,11,12,78,90,99,111,112];

const merge  = (arr1, arr2) => {
    let mergedArr = [];
    while (arr1.length &&  arr2.length) {
        console.log(arr1[0], arr2[0]);
        if(arr1[0] < arr2[0]) {
            mergedArr.push(arr1[0]);
            arr1.shift();
        } else {
            mergedArr.push(arr2[0]);
            arr2.shift();
        }
    }
    console.log(arr1, arr2);
    return [...mergedArr, ...arr1, ...arr2];
}

console.log(merge(arr1, arr2));