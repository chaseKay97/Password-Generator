// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//options
var specialOne= ".,!/_"
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var lowerCase= "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword(){
  document.getElementById("")
}
