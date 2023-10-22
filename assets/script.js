// Arrays for password generator
var upperCases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialSymb = ['?','!','@','#','$','%','^','^','&','*','(',')','-','+','~','<','>',',','.',':',';','[',']'];

var userChoice = [];
var passwordLength = 8;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var prompts = generatePrompt();
  var passwordText = document.querySelector("#password");

// if else statemanet for true or false
  if(prompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Password generator for functions
function generatePassword() {
  var password = "";
for (var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * userChoice.length);
    password += userChoice[index];
}
return password;
}

// function and if statements for prompts and user input
function generatePrompt() {

  userChoice = [];

  passwordLength = prompt("A strong password includes all criterias when being generated. The Password length can be between 8 and 128 characters. How many characters would you like?");
    
  if (passwordLength < 8 !== passwordLength > 128) {
     
    alert("Password must be between 8 to 128 characters. Try again.");
    
    return;
} 
  if (confirm("Do you want Uppercase letters in your password?")) {
    userChoice = userChoice.concat(upperCases);
}
 if (confirm("Do you want Lowercase letters in your password?")) {
    userChoice = userChoice.concat(lowerCases);
}
  if (confirm("Do you want Numbers in your password?")) {
  userChoice = userChoice.concat(numbers);
}
  if (confirm("Do you want Special Characters in your password?")) {
  userChoice = userChoice.concat(specialSymb);
}
return true;
}