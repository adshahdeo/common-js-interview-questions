const arr = [6,4,5,7,1,2,0,9,67,11];

const findSecondLargest = (arr) => {
	let secondHighest, highest = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if (arr[i] > highest) {
			secondHighest = highest;
			highest = arr[i];
		} else if (arr[i] > secondHighest && arr[i] < highest) {
			secondHighest = arr[i];
		}
	}

	return secondHighest;
}
console.log(findSecondLargest(arr))