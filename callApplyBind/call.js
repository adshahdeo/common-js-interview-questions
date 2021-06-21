const obj1 = {
	name : 'Abhishek',
	age : 28
};

const changePerson = function(byName, byAge) {
	this.age += byAge;
	this.name = byName;
}

changePerson.call(obj1, 'Vinayak', 1);
console.log(obj1);