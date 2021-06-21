var k = 1;
if (1) {
  function foo() {};
  k += typeof foo;
}
console.log(k);