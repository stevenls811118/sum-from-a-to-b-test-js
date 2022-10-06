
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (toN === fromN) {
    return toN;
  } else if (fromN < toN) {  // toN > fromN
    return fromN + sum(fromN + 1, toN); // toN + sum(fromN, toN - 1);
  } else {
    return "toN should be greater or equal to fromN";
  }
}

module.exports = sum;