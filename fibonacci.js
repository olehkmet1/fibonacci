var n = Number(prompt('Value 1'));

function fib(n) {
    if (n <= 0)
    return n;
    return fib(n - 1) + fib(n-2);
}

document.write('n fib = ' + fib(n));

var f = Number(prompt('Value 2'));

function fib(f) {
var a = 1, b = 1;
var c = a + b;
  for (var i = 3; i <= f; i++) {
    c = a + b;
    a = b;
    b = c;
  };
  return b;
};

document.write(' <br> f fib = ' + fib(f));