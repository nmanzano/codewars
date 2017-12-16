function scramble(str, arr) {
  var string = str.split('')
  var newString = str.split('')
  var answer;
  for (var i = 0; i < string.length; i++) {
    newString.splice(arr[i],1,string[i])
  }
  return answer = newString.join('')
};

scramble('bskl5', [2,1,4,3,0]); //5sblk
scramble('abcd', [0,3,1,2]); //acdb
scramble('sc301s', [4,0,3,1,5,2]); //c0s3s1

/* I took in the string argument and converted it to an array so that I can loop through it.
I created newString variable to save the string argument in there as well, as this is what I will manipulate.
I loop through string and use it as what I am inserting into my second array (newString)
splice allows for insertion of an element and also the removal of one.

It checks arr[i] from string, removes 1 item at index arr[i] then it inserts string[i].
For example: Using scramble('bskl5', [2,1,4,3,0])
on the firt run it removes 'k' from index 2 and inserts 'b' in it's place. Appearing like this: [ 'b', 's', 'b', 'l', '5' ]
eventually going through the whole process and resulting into [ '5', 's', 'b', 'l', 'k' ]

Once I get the desired results, I return 'answer' which is the array converted as a string.
*/
