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




var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberOptions = ['0','1','2','3','4','5','6','7','8','9'];
var specialOptions = ['&','$','!','@']



passwordLength = window.prompt("How many characters?");

  if (passwordLength < 8) {
  window.prompt("Please choose a number 8 or larger");
} else if (passwordLength > 128) {
  window.prompt("Please choose a number 128 or less");
  
} 
  
console.log (passwordLength);




passwordLower = window.confirm("Click ok if you want lowercase letters");

var firstAttempt = function() {

  var index = Math.floor(Math.random() * 26);
  var newPass = lowerOptions[index];
  for(var i=0; i < passwordLength; i++) {
  console.log (newPass[i]);
}
}
firstAttempt();



// The other variable options, add these in when above is working! 

/*

console.log (passwordLower);

passwordUpper = window.confirm("Click ok if you want uppercase letters");

console.log (passwordUpper);

passwordNumbers = window.confirm("Click ok if you want numbers");

console.log (passwordNumbers);

passwordSpecial = window.confirm("Click ok if you want special characters");

console.log (passwordSpecial);

*/

if (lowerOptions === true || upperOptions === true || numberOptions === true || specialOptions === true) {
  
}
    
  
   


