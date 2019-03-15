// for (let i = 1; i <= 10; i++) {
//     setTimeout(function() { console.log(i) }, i * 1000)
// }

for (var i = 11; i <= 20; i++) {
  // IIFE
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}

function printNum(n) {
  if (n <= 10) {
    setTimeout(function() {
      console.log(n);
    }, n * 1000);
    printNum(n + 1);
  }
}
printNum(1);
