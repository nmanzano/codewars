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
// function findUniq (arr){
//   arr.forEach((x)=> {
//     if (x !=arr[x]) {
//       return x
//     }
//   })
// }

function findUniq(arr) {

  let current;
  let prev;
  let arr1 = []
  let answer;

  for (var i = 0; i < arr.length; i++) {
    
  }
  console.log(arr1, 'arr1');
}

// findUniq([ 0, 1, 0 ])
findUniq([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0])
