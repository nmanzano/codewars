// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.
//
// For example:
//
// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'
//
//
// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'
//
//
// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'
// If the feeling can be formed once - plus one to the answer.
//
// If the feeling can be formed several times from different letters - plus one to the answer.
//
// Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.

function countFeelings(string, array) {
  //good luck
  let count = 0;

  for (let x in array) {
    let words = array[x].split('');
    let compareWord = [];

    for (let y in string) {
      let letters = string[y];

      if (words.includes(letters) && !compareWord.includes(letters)) {
        compareWord.push(letters)
      }
    }

    if (compareWord.length === words.length) {
      count++
    }

  }
  return ((count > 1 || count < 1) ? count.toString() + ' feelings.' : count.toString() + ' feeling.')
}



// countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']) //'3 feelings.'
// countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']) //'2 feelings.'
countFeelings('xjexdtnvffgrzqivhekzzahrffurmahtvsbwqqgzlyvslgtxgjrxdggppfmmmqqpywdmjnobrvjfhjumjitauthzm', ['anger', 'love', 'grief', 'shame']) //'2 feelings.'
