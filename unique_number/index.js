// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
//
// The tests contain some very huge arrays, so think about performance.
//
// This is the first kata in series:
//
// Find the unique number (this kata)
// Find the unique string
// Find The Unique
//
function findUniq(arr) {
  let answer;
  arr.sort()
  arr.forEach((x)=>{
    if (x != arr[1]) {
      answer = x
    }
  })
      return answer
}


findUniq([ 0, 1, 0 ])
findUniq([ 1, 1, 1, 2, 1, 1 ])
findUniq([ 3, 10, 3, 3, 3 ])
