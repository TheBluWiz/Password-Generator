const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacterArray = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var allowedCharacters = [];
var passwordArray = [];
var password;

let passwordLength = prompt("Choose a password length between 8 and 128 characters long.");

if (passwordLength >= 8 && passwordLength <= 128) {
  let includeLowercase = confirm("Should we include lowercase characters?");
  let includeUppercase = confirm("Should we include uppercase characters?");
  let includeNumbers = confirm("Should we include numbers?");
  let includeSpecialCharacters = confirm("Should we include special characters?");

  if (includeLowercase || includeUppercase || includeNumbers || includeSpecialCharacters) {

    if (includeLowercase) {
      for (let i = 0; i < lowercaseArray.length; i++) {
        allowedCharacters.push(lowercaseArray[i])
      }
    }

    if (includeUppercase) {
      for (let i = 0; i < uppercaseArray.length; i++) {
        allowedCharacters.push(uppercaseArray[i])
      }
    }

    if (includeNumbers) {
      for (let i = 0; i < numberArray.length; i++) {
        allowedCharacters.push(numberArray[i])
      }
    }

    if (includeSpecialCharacters) {
      for (let i = 0; i < specialCharacterArray.length; i++) {
        allowedCharacters.push(specialCharacterArray[i])
      }
    }

    for (let i = 0; i < passwordLength; i++) {
      random = Math.floor(Math.random() * allowedCharacters.length);
      passwordArray.push(allowedCharacters[random])
    }
    password = passwordArray.join('');
    alert(`Your password is:\n` + password)
  } else {
    alert("You must select at least one character type.")
  }
} else {
  alert("ERROR_UNSUPPORTED_LENGTH");
}