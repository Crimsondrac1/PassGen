// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "!()*+,-./:;<=>?@[]^_`{|}~";
var finalPass = "";

function clearPassword() {
  document.getElementById("password").value = "Your Secure Password";
  setTimeout(function () {
    passGen();
  }, 500);
}

function passGen() {
  finalPass = "";
  var charCount = window.prompt(
    "Please choose between 8 and 128 characters for the length of your password."
  );
  if (charCount === "") {
    window.alert(
      "A blank value is not allowed. Please enter a value between 8 and 128."
    );
    passGen();
  } else if (charCount < 8 || charCount > 128) {
    window.alert("Please enter a value between 8 and 128.");
    passGen();
  } else {
    var numbs = window.confirm(
      "Would you like to include numbers in your password?"
    );
    var lC = window.confirm(
      "Would you like to use Lower Case letters in your password?"
    );
    var uC = window.confirm(
      "Would you like to use Upper Case letters in your password?"
    );
    var sC = window.confirm(
      "Would you like to use Special Characters in your password?"
    );
  }
  if (!numbs && !lC && !uC && !sC) {
    window.alert("You must choose at least one character type to continue.");
    passGen();
  } else if (numbs && lC && uC && sC) {
    var charList = numbers + lCase + uCase + specChar;
    console.log("You picked all 4");
  } else if (numbs && lC && uC) {
    var charList = numbers + lCase + uCase;
    console.log("You picked numbers, lower case and upper case.");
  } else if (numbs && uC && sC) {
    var charList = numbers + uCase + specChar;
    console.log("You picked numbers, upper case and Special Characters.");
  } else if (numbs && lC && sC) {
    var charList = numbers + lCase + specChar;
    console.log("You picked numbers, lower case and Special Characters.");
  } else if (lC && uC && sC) {
    var charList = lCase + uCase + specChar;
    console.log("You picked lower case, upper case and special characters.");
  } else if (numbs && uC) {
    var charList = numbers + uCase;
    console.log("You picked numbers and upper case.");
  } else if (numbs && lC) {
    var charList = numbers + lCase;
    console.log("You picked numbers and lower case.");
  } else if (numbs && sC) {
    var charList = numbers + specChar;
    console.log("You picked numbers and special characters.");
  } else if (uC && lC) {
    var charList = lCase + uCase;
    console.log("You picked upper case and lower case.");
  } else if (uC && sC) {
    var charList = uCase + specChar;
    console.log("You picked upper case and special characters.");
  } else if (lC && sC) {
    var charList = lCase + specChar;
    console.log("You lower case and special characters.");
  } else if (numbs) {
    var charList = numbers;
    console.log("You picked numbers only.");
  } else if (lC) {
    var charList = lCase;
    console.log("You picked lower case only.");
  } else if (uC) {
    var charList = uCase;
    console.log("You picked upper case only.");
  } else if (sC) {
    var charList = specChar;
    console.log("You special characters only.");
  }

  for (var i = 0; i < charCount; i++) {
    var generator = charList[Math.floor(Math.random() * charList.length)];
    finalPass += generator;
    console.log(finalPass);
    writePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = finalPass;
  document.querySelector("#password").value = password;
}

// Add event listener to generate button
function generateBtn() {
  document.getElementById("password").value = " ";
  passGen();
}
document.getElementById("generate").addEventListener("click", clearPassword);

function copyBtn() {
  var copyText = document.getElementById("password");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  window.alert("Your password has been copied to the clipboard.");
}
document.getElementById("copyPass").addEventListener("click", copyBtn);
