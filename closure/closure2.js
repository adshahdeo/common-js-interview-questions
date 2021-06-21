let fun;

if(true) {
	let i = 0;

	fun = () => {
		return i;
	}
}

let newFun = () => {
	return 3 + fun();
}

newFun();