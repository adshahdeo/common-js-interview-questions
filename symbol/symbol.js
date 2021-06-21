const name = Symbol('name');

const myObj = {
	[name] : 'Abhishek',
	age : 28
};

myObj.name = 'Rudra';

console.log(myObj);