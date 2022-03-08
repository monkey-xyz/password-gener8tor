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
  const passwordCreation = [];
  var passFinal = "";
  var passwordVariables = 4;
    var lengthCheck = prompt("How many characters would you like?"); {
      if (lengthCheck <= 15) {
        alert("Your chosen length: " + lengthCheck)
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
        alert("Thank you! Generating..");
      }
    const passGeneration = passwordCreation.join('');

    for (var i = 0; i < lengthCheck; i++) {
      passFinal += passGeneration.charAt(Math.floor(Math.random() * passGeneration.length));
    }
    return passFinal;
}