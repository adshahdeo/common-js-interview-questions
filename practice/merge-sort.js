const mergeSort = (arr) => {
	if (arr.length < 2) return arr;
	
	const mid = parseInt(arr.length / 2);
	const arr1 = arr.slice (0, mid);
	const arr2 = arr.slice (mid);

	return mergeSortedArrays (mergeSort (arr1), mergeSort (arr2));
}

const mergeSortedArrays = (arr1, arr2) => {
	const sortedArray = [];

	while (arr1.length && arr2.length)
		sortedArray.push (arr1[0] < arr2[0] ? arr1.shift () : arr2.shift ());

	return [...sortedArray, ...arr1, ...arr2];
}

console.log (mergeSort ([9,8,2,3,7,1,5]));