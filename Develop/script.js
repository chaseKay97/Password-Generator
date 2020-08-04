
document.querySelector("#generate").addEventListener("click", generatePassword);

//Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//

var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// How many characters for the password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to have?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 8|| confirmLength >= 128) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to have?"));
      } 

      // let the user know how any  characters they will have  
      alert(`Your password will have ${confirmLength} characters`);

    //Confirm password  
    var confirmSpecialCharacter = confirm("Press OK to include special characters");
    var confirmNumericCharacter = confirm("Press OK to include numeric characters");    
    var confirmLowerCase = confirm("Press OK to include lowercase characters");
    var confirmUpperCase = confirm("Press OK to include uppercase characters");
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Press OK to  include special characters");
        var confirmNumericCharacter = confirm("Press OK to include numeric characters");    
        var confirmLowerCase = confirm("Press OK to include lowercase characters");
        var confirmUpperCase = confirm("Press OK to include uppercase characters");   
    } 

}