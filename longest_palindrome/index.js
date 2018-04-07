// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.
//
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
//
// If the length of the input string is 0, return value must be 0.
//
// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

const longestPalindrome = function(s){
  const wordSplit = s.split('')
  const arr = []
  const arrReverse = []
  let newArr;
  let newArrReverse;
  let savedWords = []

  for (let x in wordSplit) {
    let letter = wordSplit[x];

    arr.push(letter);
    newArr = arr.join('')

    arrReverse.push(letter);
    newArrReverse = arrReverse.reverse().join('')

    if (newArr === newArrReverse) {
      savedWords.push(newArr);
    }

  }

}

// longestPalindrome("a") //1
// longestPalindrome("aa") //2
// longestPalindrome("baa") //2
// longestPalindrome("aab") //2
longestPalindrome("zzbaabcd") //4
