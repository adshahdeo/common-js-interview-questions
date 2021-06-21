const obj1 = {
	name : 'Abhishek',
	age : 28
};


const changePerson = function(byName, byAge) {
	this.age += byAge;
	this.name = byName;
}

const bound = changePerson.bind(obj1);

bound('Vinayak', 1);

console.log(obj1);