let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if(true) {
			resolve('resolved from promise 1');
		} else {
			reject('reject from promise 1');
		}
	}, 3000);
});

let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if(true) {
			resolve('resolved from promise 2');
		} else {
			reject('reject from promise 2');
		}
	}, 4000);
});

let promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if(true) {
			resolve('resolved from promise 3');
		} else {
			reject('reject from promise 3');
		}
	}, 5000);
});



// Run promises in sync by chaining them
promise1.then((status1) => {
	console.log(status1);
}).catch((err1) => {
	console.log(err1);
}).then(() => {
	promise2.then((status2) => {
		console.log(status2);
	}).catch((err2) => {
		console.log(err2);
	}).then(() => {
		promise3.then((status3) => {
			console.log(status3);
		}).catch((err3) => {
			console.log(err3);
			console.log('all promises fulfilled in sync');
		});
	});
});

let promises = [promise1, promise2, promise3];

// run all promises and wait for result
Promise.all(promises).then((res) => {
	console.log(res);
}).catch((err) => {
	console.log(err);
});

// run all promises and watch for race condition and resolve even if one is completed
Promise.race(promises).then((res) => {
	console.log(res);
}).catch((err) => {
	console.log(err);
});