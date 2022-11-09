// Assignment Code
var generateBtn = document.querySelector("#generate");


function getLength(){
  var tempPassword = prompt("How many characters would you like your password to be?")
  if(tempPassword < 8 || tempPassword >128 || isNaN(tempPassword)){
    alert("YO dude enter a character between 8 and 128")
    var tryAgain = confirm("Do you want to enter the number again?")
    if(!tryAgain){
      return 0
    } 
    return getLength()
  }
  return tempPassword
  }
//

function getCharType(){
  // Arrays of possible character types to include
  var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numberOptions = ['0','1','2','3','4','5','6','7','8','9'];
  var specialOptions = ['&','$','!','@'];
  var possibleCharacters = [];
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
  if(possibleCharacters.length === 0){
    alert("YO dude you need to select at least one character type")
    var tryAgain = confirm("Do you want to enter the prompts again?")
    if(!tryAgain){
      return 0
    } 
    return getCharType()
  }
  // Create array based on boolean responses
  return possibleCharacters
}




// Write password to the #password input



// My code (It's one giant function...):

function generatePassword () {
  console.log('generating password function')
// Ask for desired character length
passwordLength = getLength()
if(passwordLength === 0){
  alert("Thanks for using our app!")
  return
}

var passwordBase = getCharType()
console.log("entering generatePassword again", passwordBase)
if(passwordBase === 0){
  alert("Thanks for using our app!")
  return
}
var passwordStr = cookupPass(passwordLength, passwordBase)
return passwordStr
}

function writePassword() {
  console.log("writing password")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Generation of password
var cookupPass = function(characterCount, characterBase) {
  console.log("in the kitchen")
  console.log(characterCount)
  console.log(characterBase)
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
