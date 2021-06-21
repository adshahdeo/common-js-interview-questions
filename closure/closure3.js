const outerFun = () => {
	let i = 1;
	return () => {
		return i;
	}
}

const innerFun = outerFun();

const myFunAdd = (num) => {
	return innerFun() + num;
}

myFunAdd(5);