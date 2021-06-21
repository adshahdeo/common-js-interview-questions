var res = {};
const flattenObject = function(obj) {
	Object.keys(obj).forEach((key) => {
		if(typeof(obj[key]) === 'object') {
			flattenObject(obj[key]);
		} else {
			res[key] = obj[key];
		}
	});
}

let myObj = {
	a:1,  b: {
		c:{
			d:{
				e:2,
				f:4
			}
		}
	}
};

flattenObject(myObj);
console.log(res);