// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


function sortArray(array) {
  // Return a sorted array.
  let oddArr = [];
  array.forEach(x=>{
    x%2 != 0 ? oddArr.push(x) : null
    oddArr.sort((a,b) => a - b)
  })
  for (let x of array) {
    if (!oddArr.includes(x)) {
      oddArr.splice(array.indexOf(x), 0, x);
    }
  }
  return(oddArr);
}


// sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]
// sortArray([5, 3, 1, 8, 0])// [1, 3, 5, 8, 0])
// sortArray([])//[]
sortArray([ 5, 3, 2, 8, 1, 4, 11 ]) //[1, 3, 2, 8, 5, 4, 11])

// BELOW IS NOT MY SOLUTION
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }
