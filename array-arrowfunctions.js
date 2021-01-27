let modify = (array) => {
  for (let i = 0; i < array.length; i++) {
    isprime = true;
    for (let j = 2; j < array[i]; j++) {
      if (array[i] % j == 0) {
        array[i] = array[i] * 2;
        isprime = false;

        break;
      }
    }

    if (isprime) {
      if (array[i] == 0) {
        array[i] = 0;
      } else {
        array[i] = array[i] + 1;
      }
    }
  }

  return array;
};
console.log(modify([1, 2, 3, 4, 5]));
module.exports = modify;
