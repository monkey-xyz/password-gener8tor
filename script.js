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

function generatePassword() {
    var lengthCheck = prompt("How many characters would you like?"); {
      if (lengthCheck.isInteger === true) {
        
      } else {
        alert("Please enter a real number.")
      }
    }
    var symbolCheck = confirm("Would you like special characters?");
    var uppercaseCheck = confirm("Would you like uppercase characters?");
    var lowercaseCheck = confirm("Would you like lowercase characters?");
    var numberCheck = confirm("Would you like numbers?");
  return;
}