function evenNumbers(n) {
  var ans = [];
  for (var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      ans.push(i);
    }
  }
  return ans;
}

module.exports = evenNumbers;
