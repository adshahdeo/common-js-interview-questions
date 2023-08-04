const memoizedFunction = (val) => {
	const cache = {};
	return (val) => {
		if(cache[val]) {
			console.log('returning from cache');
			return cache[val];
		} else {
			const res = val + 100;
			cache[val] = res;
			return res;
		}
	}
}

const add100 = memoizedFunction();

console.log(add100(20));