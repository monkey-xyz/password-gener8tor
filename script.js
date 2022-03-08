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
      if (lengthCheck < 15) {
        
      } else {
        alert("Please enter a real number.")
      }
    }
    var symbolCheck = confirm("Would you like special characters?");
      if (true) {
        var symbolsChar = ["!'#$%&*()+,./:;<=>?@[]^_`~{}"];
      } else {
        ignore
      }
    var uppercaseCheck = confirm("Would you like uppercase characters?");
      if (true) {
        var uppercaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
      } else {
        ignore
      }
    var lowercaseCheck = confirm("Would you like lowercase characters?");
      if (true) {
        var lowercaseChar = ["abcdefghijklmnopqrstuvwxyz"];
      } else {
        ignore
      }
    var numberCheck = confirm("Would you like numbers?");
      if (true) {
        var numbersChar = ["1234567890"]
      } else {
        ignore
      }
  return;
}