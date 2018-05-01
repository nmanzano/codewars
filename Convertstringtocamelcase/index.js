// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// link: https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

function toCamelCase(str){

  if (str.includes('_')) {
    let num = str.indexOf('_') + 1
    let final = str.charAt(num).toUpperCase()
    let work = str.replace(str[4], final)
    console.log(work);
  }
  let cheese = str.replace(/_/g, '');
  // console.log(cheese)
}

// toCamelCase('') //, '', "An empty string was provided but not returned")
toCamelCase("the_stealth_warrior")//, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// toCamelCase("The-Stealth-Warrior")//, "TheStealthWarrior"//, "toCamelCase('The-Stealth-Warrior') did not return correct value")
// toCamelCase("A-B-C")//, "ABC", "toCamelCase('A-B-C') did not return correct value")
