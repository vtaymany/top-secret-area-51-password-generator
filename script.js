// Assignment Code
var generateBtn = document.querySelector('#generate')

//Generates random password
function generatePassword() {
  //All possible values
  var possibleValues = {
    lowercase: [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ],
    uppercase: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    specialCharacters: [
      '!',
      '"',
      '#',
      '$',
      '%',
      '&',
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      '[',
      '\\',
      ']',
      '^',
      '_',
      "'",
      '{',
      '|',
      '}',
      '~',
    ],
  }

  //Final generated password
  var generatedPassword = ''
  //Length of password
  var passwordLength = ''
  //Character specifications
  var lowercaseSpec = ''
  var uppercaseSpec = ''
  var numberSpec = ''
  var specialCharacterSpec = ''

  //Prompt for password length
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt(
      'How long would you like your password to be? (Please choose a value between 8-128)'
    )
  }
  //Prompt for character specification - Lowercase
  while (
    lowercaseSpec == '' ||
    (lowercaseSpec != 'yes' && lowercaseSpec != 'no')
  ) {
    lowercaseSpec = prompt(
      'Would you like to include lowercase letters? (yes/no)'
    )
  }
  //Prompt for character specification - Uppercase
  while (
    uppercaseSpec == '' ||
    (uppercaseSpec != 'yes' && uppercaseSpec != 'no')
  ) {
    uppercaseSpec = prompt(
      'Would you like to include uppercase letters? (yes/no)'
    )
  }
  //Prompt for character specification - Number
  while (numberSpec == '' || (numberSpec != 'yes' && numberSpec != 'no')) {
    numberSpec = prompt('Would you like to include numbers? (yes/no)')
  }
  //Prompt for character specification - Special character
  while (
    specialCharacterSpec == '' ||
    (specialCharacterSpec != 'yes' && specialCharacterSpec != 'no')
  ) {
    specialCharacterSpec = prompt(
      'Would you like to include special characters? (yes/no)'
    )
  }

  if (
    lowercaseSpec == 'no' &&
    uppercaseSpec == 'no' &&
    numberSpec == 'no' &&
    specialCharacterSpec == 'no'
  ) {
    //Alert the user is no character specification has been chosen
    alert(
      'The password must consist of at least one (1) character type (i.e. lowercase, uppercase, number, special character. Please try again.'
    )
  } else {
    //Loops as many times as the user inputted
    for (i = 0; i < passwordLength; i++) {
      //Array of possible values from each character type
      var possibleRandomValue = []

      //If the user specs, adds a random lowercase value as an item to the array of possible values
      if (lowercaseSpec === 'yes') {
        var selectedLowercaseLetter =
          possibleValues.lowercase[
            Math.floor(Math.random() * possibleValues.lowercase.length)
          ]
        possibleRandomValue.push(selectedLowercaseLetter)
      }

      //If the user specs, adds a random uppercase value as an item to the array of possible values
      if (uppercaseSpec === 'yes') {
        var selectedUppercaseLetter =
          possibleValues.uppercase[
            Math.floor(Math.random() * possibleValues.uppercase.length)
          ]
        possibleRandomValue.push(selectedUppercaseLetter)
      }

      //If the user specs, adds a random number value as an item to the array of possible values
      if (numberSpec === 'yes') {
        var selectedNumber =
          possibleValues.numbers[
            Math.floor(Math.random() * possibleValues.numbers.length)
          ]
        possibleRandomValue.push(selectedNumber)
      }

      //If the user specs, adds a random special character value as an item to the array of possible values
      if (specialCharacterSpec === 'yes') {
        var selectedSpecialCharacter =
          possibleValues.specialCharacters[
            Math.floor(Math.random() * possibleValues.specialCharacters.length)
          ]
        possibleRandomValue.push(selectedSpecialCharacter)
      }

      //Selects a random character type and it's assigned value and combines them together to form the password
      var selectedValue =
        possibleRandomValue[
          Math.floor(Math.random() * possibleRandomValue.length)
        ]
      generatedPassword = generatedPassword.concat(selectedValue)
    }
  }
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
