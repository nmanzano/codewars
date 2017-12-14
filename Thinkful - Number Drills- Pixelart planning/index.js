function isDivisible(wallLength, pixelSize) {
  var sum;
  sum = wallLength / pixelSize;
  sum = sum.toString();
  if (sum.indexOf('.') == -1) {
    return true;
  }
  else {
    return false;
  }
}

isDivisible(4050, 27);
isDivisible(4066, 27);

/* I converted the divided sum of wallLength and pixelSize into a string.
Then I used indexOf to search for a decimal. When indexOf can't locate something within a string it
returns a -1. In my solution I passed sum and if it did not have a decimal it would return true.
I was able to pass all tests in this kata.
*/
