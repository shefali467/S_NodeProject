function add(a, b) {
  console.log(a + b);
  return a + b
}

function sub(a, b) {
  console.log(a - b);
  return a - b
}

function mul(a, b) {
  console.log(a * b);
  return a * b
}

function div(a, b) {
  console.log(a / b);
  return a / b
}

// for exporting this fuction out of current module we will use module.exports
module.exports = {
  addition: add,
  substraction : sub,
  multiplication : mul,
  dividation: div
}

//direct export
exports.myDateTime = function () {
  return Date();
}; 