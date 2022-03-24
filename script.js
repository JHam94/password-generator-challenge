var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password to be?")

  var passwordCharacterLength = parseInt(userInput)

  if (isNaN(passwordCharacterLength)) {
    window.alert("That is not a number!")
    return
  } 

  if (passwordCharacterLength < 8 || passwordCharacterLength > 128) {
    window.alert("Password must be between 8 and 128 characters in length")
    return
  }



  // provide options for types of characters used in generated password 
  var userNumbers = window.confirm("Would you like your password to contain numbers?")
  var userSymbols = window.confirm("Would you like your password to contain symbols?")
  var userLowercase = window.confirm("Would you like your password to contain lowercase letters?")
  var userUppercase = window.confirm("Would you like your password to contain uppercase letters?")

  // list characters to possibly be used in generated password
  var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-"]
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var characterOptionsSelected = []

  if (userNumbers === true) {
    characterOptionsSelected.push(numberCharacters)
  } 

  if (userSymbols === true) {
    characterOptionsSelected.push(symbolCharacters)
  }

  if (userLowercase === true) {
    characterOptionsSelected.push(lowercaseCharacters)
  }

  if(userUppercase === true) {
    characterOptionsSelected.push(uppercaseCharacters)
  }

  if (characterOptionsSelected.length === 0) {
    characterOptionsSelected.push(uppercaseCharacters)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordCharacterLength; i++) {
    var randomList = getRandomItem(characterOptionsSelected)
    var randomCharacter = getRandomItem(randomList)
    generatedPassword += randomCharacter
  }

  return generatedPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

