let promise1 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(true) {
				resolve('resolved from promise 1');
			} else {
				reject('reject from promise 1');
			}
		}, 3000);
	});
}

let promise2 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(true) {
				resolve('resolved from promise 2');
			} else {
				reject('reject from promise 2');
			}
		}, 4000);
	});
}

let promise3 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(true) {
				resolve('resolved from promise 3');
			} else {
				reject('reject from promise 3');
			}
		}, 5000);
	});
}

console.log(await promise1());
console.log(await promise2());
console.log(await promise3());

// (() => {
// 	console.log(await promise1());
// 	console.log(await promise2());
// 	console.log(await promise3());

// })();