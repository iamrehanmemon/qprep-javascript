function personDetail(a, b) {
  return {
    firstName: a,
    lastName: b,
    fullName: `${a} ${b}`
  };
}

personDetail();
module.exports = personDetail;
