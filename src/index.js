function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

exports.min = function min(array) {
  if (!Array.isArray(array) || !array.length) return 0;
  let a = array.sort(compareNumeric);
  return a[0];
};

exports.max = function max(array) {
  if (!Array.isArray(array) || !array.length) return 0;
  let a = array.sort(compareNumeric).reverse();
  return a[0];
};

exports.avg = function avg(array) {
  if (!Array.isArray(array) || !array.length) return 0;
  let total = array.reduce(function (a, b) {
    return a + b;
  });
  return total / array.length;
};
