function divisibleByLast(n) {
  var numbers = n.toString().split('');
  var array = [];
  var sum;
  var answer = [];

  for (var i = 0; i < numbers.length; i++) {
    array.push(parseInt(numbers[i]));
    sum = array[i] / first;
    sum = (sum - Math.floor(sum)) == 0;
    answer.push(sum);
    var first = array[i];
  }
  return (answer);
};

divisibleByLast(73312) //[false, false, true, false, true]);
// divisibleByLast(2026) [ false, true, false, true ]
// divisibleByLast(635) [ false, false, false ]
// divisibleByLast(1337) [ false, true, true, false ]

/*
I passed in the number and converted it into a string then split it up. The results created an array of numbers but as strings which I saved into a variable called "numbers".
Then looped through the array and converted each string into a number and pushed into an new array called "array".
I divided each number by the variable "first". Which initially is empty and upon the first completed loop saves the number.
I use Math.floor to determine if the results of sum above is a whole number or a decimaled number. By comparing it to zero.
The results of this is pushed into an array called "answer"
*/
