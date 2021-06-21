const myFun = () => {
	console.log(p);
	var p;
}

myFun(); // outputs undefined


const myOtherFun = () => {
	console.log(p);
	let p;
}

myOtherFun(); // outputs error: cannot use variable before intialization