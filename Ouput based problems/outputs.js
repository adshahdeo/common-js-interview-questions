class A {
    constructor (a) {
        this.a = a;
    }

    getA () {
        return this.a;
    }
}

class B {
    constructor (b) {
        this.b = b;
    }

    getB = () => {
        return this.b;
    }
}

let a = new A(1);
let b = new A(2);
console.log(a.getA());
console.log(b.getB());

/*#######################*/

function sum() {
    let a = 8;
    const b=2;
    var c=a+b;
}
console.log(a,b,c) // error
sum()
console.log(a,b,c) // error

/*#######################*/

let arr=[1,2,3,4,5]
console.log(arr[2], arr.length); //3, 5
arr.length=0;
console.log(arr[2], arr.length); //undefined, 0

/*#######################*/

for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}

// alerts 3 x 3
/*#######################*/

for(let i = 0; i <5; i++) {
    setTimeout(()=>{
        console.log(i);
    },0)
}

// logs 0,1,2,3,4

/*#######################*/

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();
/*#######################*/
console.log(1+false); // 1
console.log(1+true); // 2
console.log(1-false); // 1
console.log(1+'2'-1); // 11
/*#######################*/
(function fnA(a) {
  return (function fnB(b) {
    console.log(a); // 0
  })(1);
})(0);
/*#######################*/
console.log([]+{}); // [object Object]
console.log(1+[]); // 1
console.log(1+{}); // 1[object Object]
console.log([]+[]); // ''
console.log({}+{}); // [object Object][object Object]
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(null + []); // null
console.log(null + {}); // null[object Object]
console.log(undefined + {}); // undefined[object Object]

// null will translate to 0 for numbers
// [] will translate to '' in addition
// {} will translate to [object Object]
/*#######################*/
let x = { b: 1, c: 2 };
let y = Object.keys(x);
console.log(y.length); // 2
/*#######################*/
let x = '{ "b": 1, "c": 2 }';
let y = JSON.parse(x);
console.log(typeof y); // object
/*#######################*/

let x = 0.1 + 0.2;
let y = 0.3;
console.log(x == y); // false
/*#######################*/
let x = 1 > 2 > 3;
console.log(x); // false
/*#######################*/
let x = false;
let y = "0";
let z = 0;
  
console.log(x == y); // true
console.log(x == z); // true
/*#######################*/
let x = [];
console.log(Boolean(x)); // true
/*#######################*/
let x = "b";
let y = "a";
  
console.log(x + y + + y + y); // baNaNa
/*#######################*/
let x = [2];
let y = 2;
  
console.log(x == y); // true
/*#######################*/

let x = { a: 1, b: 2 };
let y = { b: 3 };
let z = { ...x, ...y };
  
console.log(z); // { a: 1, b: 3 }
/*#######################*/
let x = [1, 2, 3];
let y = x.map((num) => {
  x.push(num + 3);
  return num + 1;
});
  
console.log(y); // [2,3,4]
/*#######################*/
let a = [1, 2, 3];
a.push(a[2]++);
  
console.log(a); // [1,2,4,3]
/*#######################*/
let x = [1];
let y = x + 1;
  
console.log(y); // 11
/*#######################*/
let x = [1, 2, 3];
let y = x.slice();
  
console.log(y, x === y); // [1,2,3] false
/*#######################*/
let x = [1, 2, 3, 4];
let [a, ...b] = x.reverse();
  
console.log(b); // [3,2,1]
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
/*#######################*/
