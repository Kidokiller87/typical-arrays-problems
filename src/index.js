
exports.min = function min (array) {
  if (array=[] || !array) {
    return 0
  }
  
  return Math.min(...array);
}

exports.max = function max (array) {
  if (array=[] || !array) {
    return 0
  }
  
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (array=[] || !array) {
    return 0
  }
 return array.reduce((a, b) => (a + b)) / array.length;
}
