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




// My code:


// Arrays of possible character types to include

var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberOptions = ['0','1','2','3','4','5','6','7','8','9'];
var specialOptions = ['&','$','!','@'];

// Ask for desired character length

passwordLength = window.prompt("How many characters?");

  if (passwordLength < 8) {
  window.prompt("Please choose a number 8 or larger");
} else if (passwordLength > 128) {
  window.prompt("Please choose a number 128 or less");
  
} 
  
console.log (passwordLength);

// Ask if lowercase letters are desired

passwordLower = window.confirm("Click ok if you want lowercase letters");

console.log (passwordLower);

// Ask if uppercase letters are desired

passwordUpper = window.confirm("Click ok if you want uppercase letters");

console.log (passwordUpper);

// Ask if numbers are desired

passwordNumbers = window.confirm("Click ok if you want numbers");

console.log (passwordNumbers);

// Ask if special characters are desired

passwordSpecial = window.confirm("Click ok if you want special characters");

console.log (passwordSpecial);

if (!lowerOptions && !upperOptions && !numberOptions && !specialOptions) {

  window.prompt("You must choose at least one option!");
}

// Create array based on boolean responses

var possibleCharacters = [];
if (passwordLower) {
possibleCharacters = possibleCharacters.concat(lowerOptions);
} else if (passwordUpper) {
possibleCharacters = possibleCharacters.concat(upperOptions);
} else if (passwordNumbers) {
  possibleCharacters = possibleCharacters.concat(numberOptions);
} else if (passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(specialOptions);
}

// Generation of password, works with a single true value


var cookupPass = function() {
  let i = 0; 
  do {
  var index = Math.floor(Math.random() * possibleCharacters.length);
  var newPass = possibleCharacters[index];
  i++;
  console.log (newPass);
  } while (i < passwordLength);
 return newPass;
}
  
cookupPass();

