const add100Memo = () => {
	const cache = {};

	return function(num) {
		if(cache[num]) {
			console.log('returing from cache');
			return cache[num];
		} else {
			let res = num + 100;
			cache[num] = res;
			return res;
		}
	}
}

const add100 = add100Memo();