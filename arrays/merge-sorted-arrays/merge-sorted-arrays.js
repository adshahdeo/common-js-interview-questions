const mergeSortedArrays = (arr1, arr2) => {
	let mergedArray = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] > arr2[0]) {
			mergedArray.push(arr1[0]);
			arr1.shift();
		} else {
			mergedArray.push(arr2[0]);
			arr2.shift();
		}
	}

	return mergedArray;
}