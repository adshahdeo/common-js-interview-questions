const mergeSort = (arr) => {
	if(arr.length < 2) return arr;

	const mid = parseInt(arr.length/2);
	const leftArr = arr.slice(0, mid), rightArr = arr.slice(mid);
	return mergeArrays(mergeSort(leftArr), mergeSort(rightArr));
}

const mergeArrays = (arr1, arr2) => {
	const merged = [];
	while (arr1.length && arr2.length) {
		merged.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
	}
	return [...merged, ...arr1, ...arr2];
}

const arr = [9,3,1,5,4,8,6,7,0];
console.log(mergeSort(arr));