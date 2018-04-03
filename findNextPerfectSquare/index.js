// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
//
// Examples:
//
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
  const num = Math.sqrt(sq)
  let nextNum = sq + 1
  if (num % 1 === 0) {
    while (Math.sqrt(nextNum) % 1 != 0) {
      nextNum++
    }
    return (nextNum);
  }
  else {
    return -1;
  }
}

findNextSquare(121) // 144
// findNextSquare(114)  144