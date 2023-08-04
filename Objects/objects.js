var create = function (x, y) {
    this.x = x;
    this.y = y;
}

let first = new create(1, 2);
let second = new create(3, 4);

create.prototype.z = 99;

let third = new create(101, 102);

console.log('first', first);
console.log('second', second);
console.log('third', third);

var foo = {
    x : 2,
    bar : {
        x : 1,
        baz : function () {
            return this.x;
        }
    }
}

var go = foo.bar.baz;
console.log(go);
console.log(foo.bar.baz())