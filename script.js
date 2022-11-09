// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 //  var passwordText = document.querySelector("#password");

 //  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My code:
function generatePassword () {

// Arrays of possible character types to include

var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberOptions = ['0','1','2','3','4','5','6','7','8','9'];
var specialOptions = ['&','$','!','@'];

// Ask for desired character length

passwordLength = window.prompt("How many characters?");

  if (passwordLength < 8 || passwordLength > 128) {
  window.prompt("Please choose a number between 8 and 128");
/* } else if (passwordLength > 128) {
  window.prompt("Please choose a number 128 or less");
*/ 
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


// Create array based on boolean responses

var possibleCharacters = [];
if (passwordLower && !passwordUpper && !passwordNumbers && !passwordSpecial) {
possibleCharacters = possibleCharacters.concat(lowerOptions);
} else if (passwordLower && passwordUpper && !passwordNumbers && !passwordSpecial) {
possibleCharacters = possibleCharacters.concat(lowerOptions, upperOptions);
} else if (passwordLower && passwordUpper && passwordNumbers && !passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(lowerOptions, upperOptions, numberOptions);
} else if (passwordLower && passwordUpper && passwordNumbers && passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(lowerOptions, upperOptions, numberOptions, specialOptions);
} else if (passwordLower && !passwordUpper && passwordNumbers && passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(upperOptions, numberOptions, specialOptions);
} else if (passwordLower && !passwordUpper && !passwordNumbers && passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(lowerOptions, specialOptions);
} else if (passwordLower && !passwordUpper && passwordNumbers && !passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(lowerOptions, numberOptions);
} else if (!passwordLower && passwordUpper && passwordNumbers && passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(upperOptions, numberOptions, specialOptions);
} else if (!passwordLower && passwordUpper && !passwordNumbers && passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(upperOptions, specialOptions);
} else if (!passwordLower && passwordUpper && passwordNumbers && !passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(upperOptions, numberOptions);
} else if (!passwordLower && !passwordUpper && passwordNumbers && passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(numberOptions, specialOptions);
} else if (!passwordLower && !passwordUpper && !passwordNumbers && passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(specialOptions);
} else if (!passwordLower && !passwordUpper && passwordNumbers && !passwordSpecial) {
  possibleCharacters = possibleCharacters.concat(numberOptions);
} else {
  window.prompt("You must choose at least one option!");
}

// Generation of password


var cookupPass = function() {
  let i = 0; 
  let str ="";
  do {
  var index = Math.floor(Math.random() * possibleCharacters.length);
  var newPass = possibleCharacters[index];
  str += newPass;
  i++;
  } while (i < passwordLength);
 var passwordText = document.querySelector("#password");
 passwordText.value = str;
};

cookupPass();

}

