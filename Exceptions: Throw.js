function isAlphabet(X) {
  if (/[a-zA-Z]/.test(X)) {
    return "Yes";
  } else {
    throw "Not Alphabet";
  }
}
console.log(isAlphabet("A"));
module.exports = isAlphabet;
