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

const passwordCreation = [];

function generatePassword() {
  var ignore = '';
  var passwordVariables = 4;
    var lengthCheck = prompt("How many characters would you like?"); {
      if (lengthCheck <= 15) {
        lengthCheck = "";
      } else if (lengthCheck > 15) {
        alert("Please enter a smaller number.")
      } else {
        alert("Please enter a real number.")
      }
    }
    var symbolCheck = confirm("Would you like special characters?");
      if (symbolCheck == true) {
        passwordCreation.push("!'#$%&*()+,./:;<=>?@[]^_`~{}");
      } else {
        alert("Thank you! Onto the next choice..");
      }
    var uppercaseCheck = confirm("Would you like uppercase characters?");
      if (uppercaseCheck == true) {
        passwordCreation.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      } else {
        alert("Thank you! Onto the next choice..");
      }
    var lowercaseCheck = confirm("Would you like lowercase characters?");
      if ( lowercaseCheck == true) {
        passwordCreation.push("abcdefghijklmnopqrstuvwxyz");
      } else {
        alert("Thank you! Onto the next choice..");
      }
    var numberCheck = confirm("Would you like numbers?");
      if (numberCheck == true) {
        passwordCreation.push("1234567890");
      } else {
        alert("Thank you! Onto the next choice..");
      }
    for (var i = 0; i < passwordCreation; i++) {
      var passSelection = Math.floor(Math.random() * passwordCreation.length);
      password += passwordCreation.substring(passSelection, passSelection +1)
    }
    return password;
}

console.log(passwordCreation);