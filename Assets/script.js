// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Creates arrays for each requirement type
  const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharacterArray = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var allowedCharacters = [];
  var passwordArray = [];
  var password;

  //Set password length
  let passwordLength = prompt("Choose a password length between 8 and 128 characters long.");

  // checks if password is within viable length
  if (passwordLength >= 8 && passwordLength <= 128) {

    // checks User password requirements
    let includeLowercase = confirm("Should we include lowercase characters?");
    let includeUppercase = confirm("Should we include uppercase characters?");
    let includeNumbers = confirm("Should we include numbers?");
    let includeSpecialCharacters = confirm("Should we include special characters?");

    // confirms at least one of required data types chosen
    if (includeLowercase || includeUppercase || includeNumbers || includeSpecialCharacters) {
      
      // adds user required data types to allowedCharacters
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

      // assign random characters to User password array up to specified password length
      for (let i = 0; i < passwordLength; i++) {
        random = Math.floor(Math.random() * allowedCharacters.length);
        passwordArray.push(allowedCharacters[random])
      }

      // transfers array into string for output
      password = passwordArray.join('');
      return password;
    } else {
      alert("You must select at least one character type.")
    }
  } else {
    alert("ERROR_UNSUPPORTED_LENGTH");
  }
}