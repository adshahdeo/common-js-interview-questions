const Foo = function(a) {
  function bar() {
    return a;
  }
  this.bar = bar;
  this.baz = function() {
    return a;
  };
};
 
Foo.prototype = {
  biz: function() {
    return a;
  },
};
 
const f = new Foo(7);
 
console.log(f.bar()); // undefined
console.log(f.baz()); // undefined
console.log(f.biz()); // undefined