// You need to write regex that will validate a password to make sure it meets the following criteria:
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/.test(password);
}


validate('djI38D55') //true
!validate('a2.d412') //false
!validate('JHD5FJ53') //false
!validate('!fdjn345') //false
!validate('jfkdfj3j') //false
!validate('123') //false
!validate('abc') //false
validate('Password123') //true
