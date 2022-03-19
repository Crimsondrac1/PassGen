// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "!@#$%^&*()-=";
var passLength = function () {
  window.prompt("How many characters would you like your password to be?");
}

function characterQuery () {
  if (passLength >= 8 && passLength <= 128) {
    window.alert("You have chosen " + passLength + " characters for your password.");
  }
  else {
    window.alert("Please enter a numerical value between 8 and 128.");
    passLength
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

characterQuery();