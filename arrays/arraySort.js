let a = [30, 20, 15, 2];

console.log(a.sort()); // [15, 2, 20, 30], sorts by converting elements to string and then compare first index's unicode

// to sort in ascending order, pass comparison
console.log(a.sort((a,b) => {
	return (a - b);
}));

// [2, 15, 20, 30], checks the return of callback by taking two elements at a time, if it is positive move b to higher index