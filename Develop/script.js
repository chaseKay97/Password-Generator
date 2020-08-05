
document.querySelector("#generate").addEventListener("click", generatePassword);

// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Confirm how many characters in password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if not in range
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-50 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Let user know how character they will have  
      alert(`Your password will have ${confirmLength} characters`);

    // confirm password 
    var confirmSpecialCharacter = confirm("Press OK to confirm to include special characters");
    var confirmNumericCharacter = confirm("Press OK to confirm to include numeric characters");    
    var confirmLowerCase = confirm("Press OK to confirm to include lowercase characters");
    var confirmUpperCase = confirm("Press OK to confirm  to include uppercase characters");
      // Loop if password doesnt equal before
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Press OK to confirm to include special characters");
        var confirmNumericCharacter = confirm("Press OK to confirm include numeric characters");    
        var confirmLowerCase = confirm("Press OK to confirm to include lowercase characters");
        var confirmUpperCase = confirm("Press OK to confirm  to include uppercase characters");   
    } 

      // action to the password 
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      //console.log(passwordCharacters)

      // Empty string  for loop selecting random characters 
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        //console.log(randomPassword)
      }var passwordText = document.querySelector("#password")
      
      passwordText.value = randomPassword;
    }
