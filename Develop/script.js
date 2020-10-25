// Assignment Code
var generateBtn = document.querySelector('#generate')

//Generates password

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
  var passwordLength = ''
  var lowercaseSpec = ''
  var uppercaseSpec = ''
  var numberSpec = ''
  var specialCharacterSpec = ''
  //User prompts

  function characterSpec() {
    while (
      lowercaseSpec == '' ||
      (lowercaseSpec != 'yes' && lowercaseSpec != 'no')
    ) {
      lowercaseSpec = prompt(
        'Would you like to include lowercase letters? (yes/no)'
      )
    }
    while (
      uppercaseSpec == '' ||
      (uppercaseSpec != 'yes' && uppercaseSpec != 'no')
    ) {
      uppercaseSpec = prompt(
        'Would you like to include uppercase letters? (yes/no)'
      )
    }
    while (numberSpec == '' || (numberSpec != 'yes' && numberSpec != 'no')) {
      numberSpec = prompt('Would you like to include numbers? (yes/no)')
    }
    while (
      specialCharacterSpec == '' ||
      (specialCharacterSpec != 'yes' && specialCharacterSpec != 'no')
    ) {
      specialCharacterSpec = prompt(
        'Would you like to include special characters? (yes/no)'
      )
    }
  }

  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt(
      'How long would you like your password to be? (Please choose a value between 8-128)'
    )
  }
  characterSpec()
  console.log(lowercaseSpec)
  console.log(uppercaseSpec)
  console.log(numberSpec)
  console.log(specialCharacterSpec)
  if (
    lowercaseSpec == 'no' &&
    uppercaseSpec == 'no' &&
    numberSpec == 'no' &&
    specialCharacterSpec == 'no'
  ) {
    alert(
      'The password must consist of at least one (1) character type (i.e. lowercase, uppercase, number, special character. Please try again.'
    )
  } else {
    //Loop as many times as the user inputted
    for (i = 0; i < passwordLength; i++) {
      //Array of possible values of any given index of the password
      var possibleRandomValue = []

      //If the user wants lowercase values in their password
      if (lowercaseSpec === 'yes') {
        var selectedLowercaseLetter =
          possibleValues.lowercase[
            Math.floor(Math.random() * possibleValues.lowercase.length)
          ]
        possibleRandomValue.push(selectedLowercaseLetter)
      }

      //If the user wants uppercase values in their password
      if (uppercaseSpec === 'yes') {
        var selectedUppercaseLetter =
          possibleValues.uppercase[
            Math.floor(Math.random() * possibleValues.uppercase.length)
          ]
        possibleRandomValue.push(selectedUppercaseLetter)
      }

      //If the user wants number values in their password
      if (numberSpec === 'yes') {
        var selectedNumber =
          possibleValues.numbers[
            Math.floor(Math.random() * possibleValues.numbers.length)
          ]
        possibleRandomValue.push(selectedNumber)
      }

      //If the user wants special character values in their password
      if (specialCharacterSpec === 'yes') {
        var selectedSpecialCharacter =
          possibleValues.specialCharacters[
            Math.floor(Math.random() * possibleValues.specialCharacters.length)
          ]
        possibleRandomValue.push(selectedSpecialCharacter)
      }

      //Selects a random type of value for any given index of the password, then assigns the select
      var selectedValue =
        possibleRandomValue[
          Math.floor(Math.random() * possibleRandomValue.length)
        ]
      generatedPassword = generatedPassword.concat(selectedValue)
    }
  }
  //Generates a random password based on user inputs

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
