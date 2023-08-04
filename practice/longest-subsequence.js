function longestSubsequence(arr){
    arr = arr.sort();
    let arr1 = arr[0];
    let arr2 = arr[1];
    let i = 0;
    let str = '';
    while(i < arr1.length && arr1[i] === arr2[i]) {
    	str += arr1[i];
    	i++;
    }
    return str;
}