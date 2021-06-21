const secondLargest = (arr) => {
	if(arr.length < 2) return;
	
	let largest, secLargest;
	if(arr[0] > arr[1]) {
		largest = arr[0];
		secLargest = arr[1];
	} else {
		largest = arr[1];
		secLargest = arr[0];
	}

	if(arr.length < 3) return secLargest;

	for (let i = 0; i < arr.length; i++) {
		if (largest < arr[i]) {
			secLargest = largest;
			largest = arr[i];
		} else if (secLargest < arr[i] && largest > arr[i]) {
			secLargest = arr[i];
		}
	}
	return secLargest;
}

console.log(secondLargest([9,3,1,5,4,8,6,7,0]));