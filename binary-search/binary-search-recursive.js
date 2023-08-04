const bSearch = (arr, low, high, key) => {
	if (low > high) return -1;
	const mid = parseInt((low + high)/2);
	if (key === arr[mid]) return mid;
	else if (key < arr[mid]) return bSearch(arr, low, mid-1, key);
	else return bSearch(arr, mid+1, high, key);
}