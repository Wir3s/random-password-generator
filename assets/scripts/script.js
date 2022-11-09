// Assignment Code
var generateBtn = document.querySelector("#generate");

// Determine password length
function getLength(){
  var tempPassword = prompt("How many characters would you like your password to be?")
  if(tempPassword < 8 || tempPassword >128 || isNaN(tempPassword)){
    alert("Enter a character between 8 and 128")
    var tryAgain = confirm("Do you want to enter the number again?")
    if(!tryAgain){
      return 0
    } 
    return getLength()
  }
  return tempPassword
  }

// Function containing array options and character choices

function getCharType(){
  // Arrays of possible character types to include
  var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numberOptions = ['0','1','2','3','4','5','6','7','8','9'];
  var specialOptions = ['&','$','!','@'];
  var possibleCharacters = [];

  // Ask if lowercase letters are desired
  passwordLower = window.confirm("Click ok if you want lowercase letters");
  if(passwordLower){
    possibleCharacters = possibleCharacters.concat(lowerOptions)
  }
  
  // Ask if uppercase letters are desired
  passwordUpper = window.confirm("Click ok if you want uppercase letters");
  if(passwordUpper){
    possibleCharacters = possibleCharacters.concat(upperOptions)
  }
  
  // Ask if numbers are desired
  passwordNumbers = window.confirm("Click ok if you want numbers");
  if(passwordNumbers){
    possibleCharacters =possibleCharacters.concat(numberOptions)
  }
  
  // Ask if special characters are desired
  passwordSpecial = window.confirm("Click ok if you want special characters");
  if(passwordSpecial){
    possibleCharacters = possibleCharacters.concat(specialOptions)
  }

  // Check at least one character type was selected 
  if(possibleCharacters.length === 0){
    alert("You need to select at least one character type")
    var tryAgain = confirm("Do you want to enter the prompts again?")
    if(!tryAgain){
      return 0
    } 
    return getCharType()
  }
  
  return possibleCharacters
}

// If user cancels process, end. Otherwise, generate and write password

function generatePassword () {
passwordLength = getLength()
if(passwordLength === 0){
  alert("Thanks for using the password generator!")
  return
}

var passwordBase = getCharType()
if(passwordBase === 0){
  alert("Thanks for using the password generator!")
  return
}
var passwordStr = cookupPass(passwordLength, passwordBase)
return passwordStr
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Generation of random password
var cookupPass = function(characterCount, characterBase) {
  let i = 0; 
  let str ="";
  do {
    var index = Math.floor(Math.random() * characterBase.length);
  var newPass = characterBase[index];
  str += newPass;
  i++;
} while (i < characterCount);
return str
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
