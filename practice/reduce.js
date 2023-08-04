Array.prototype.myReduce = function (callback, initialVal=0) {
	var val = initialVal;
	for (var i = 0; i < this.length; i++) {
		val += callback (this[i], initialVal);
	}
	return val;
}

var arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.myReduce((val, acc) => {
	return acc += val;
}, 10));