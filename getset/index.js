let person = {
	firstName : 'Abhishek',
	lastName : 'Shahdeo',
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	set name(str) {
		const nameArr = str.split(' ');
		this.firstName = nameArr[0];
		this.lastName = nameArr[1];
	}
};

console.log(person.name);
person.name = 'Rudra Shahdeo';
console.log(person.name);