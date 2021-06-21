let a = 1;
let b = 2;

console.log('async test');

setTimeout(() => {
	console.log(a);
	console.log(b);
	console.log('but inside set timeout, it will take the new value of a, so sum will be', a + b);
}, 100)

console.log('value of a is', a);
console.log('value of b is', b);
console.log('sum of a and b is', a + b);

a = 10;