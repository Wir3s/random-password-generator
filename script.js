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

// Generation of password, works with lowercase as-is, need to concat arrays

// loweroptions will have to change to new array name

var cookupPass = function() {
  let i = 0; 
  do {
  var index = Math.floor(Math.random() * lowerOptions.length);
  var newPass = lowerOptions[index];
  i++;
  console.log (newPass);
  } while (i < passwordLength);
 return newPass;
}
  
cookupPass();


/* Need a way to add arrays if they are true

var buildArray = function() {
  if (passwordLower === true && passwordUpper === true && passwordNumbers === true && passwordSpecial === true) {
    newArray = passwordLower.concat(upperOptions, numberOptions, specialOptions);
  }
}

*/



// The other variable options, add these in when above is working! 

/*



passwordUpper = window.confirm("Click ok if you want uppercase letters");

console.log (passwordUpper);

passwordNumbers = window.confirm("Click ok if you want numbers");

console.log (passwordNumbers);

passwordSpecial = window.confirm("Click ok if you want special characters");

console.log (passwordSpecial);

*/

//  require at least one to be true

/*

if (!lowerOptions && !upperOptions && !numberOptions && !specialOptions) {

  window.prompt("You must choose at least one option!");
}
    
*/
   


