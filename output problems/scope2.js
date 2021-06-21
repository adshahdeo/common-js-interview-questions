var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k);