var fun = function() {
	this.a = 1;
	this.b = 2;

	setTimeout(() => {
		this.a++;
		console.log(this.a);
	}, 3000);
};

var p = new fun();

var fun = () => {
	console.log(arguments[0]); // will not print argument, instead it will print arguments not defined
}

fun(1,2,3);

var newFun = (...args) => {
	console.log(args[0]); // will print the first argument
}

newFun(1,2,3);