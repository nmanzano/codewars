// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// link: https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

function toCamelCase(str){
  if(str === ''){
      return ''
  }
  str = str.split('')

  str = str.filter((x, y) => {

    if (x === '_' || x === '-') {
      let index = y + 1
      let item = str[index].toUpperCase()

      str.splice(index, 1, item);
    }
    return str;
  })

  if (str.includes('_') ) {
    str = str.join('').replace(/_/g, '');
  }else if (str.includes('-')) {
    str = str.join('').replace(/-/g, '');
  }

console.log(str);

}

// toCamelCase('') //, '', "An empty string was provided but not returned")
// toCamelCase("the_stealth_warrior")//, "theStealthWarrior"
// toCamelCase("The-Stealth-Warrior")//, "TheStealthWarrior"
// toCamelCase("A-B-C")//, "ABC"
// toCamelCase("I-am-a-programmer")//, "IAmAProgrammer"
toCamelCase("i-am-a-programmer")//, "iAmAProgrammer"
