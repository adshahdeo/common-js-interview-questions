let arr = [2, 3, 23, 35, 5, 1, 0, 0, 2, 3, 4, 5, 7, 8, 9, 3, 4, 6, 1, 9, 6, 78, 12, 98, 10, 1, 2, 3, 4, 5];

let el = 1, counter = 0;

for (let i = 0; i < arr.length; i++) {
	if (el === arr[i]) {
		counter++;
	}
}

if(!counter) console.log('this element doesn\'t exist');
else console.log(counter);