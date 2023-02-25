var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var dataLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var dataSpecChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var dataNumbers = "0123456789".split("");

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

function generatePassword() {
  let pwLen = window.prompt(
    "How many characters would you like to use (min: 8, max: 128)"
  );
  if (pwLen < 8 || pwLen > 128 || isNaN(pwLen))
    do {
      pwLen = prompt("Please pick a number betweeen 8 and 128: ");
    } while (pwLen < 8 || pwLen > 128 || isNaN(pwLen));
  window.alert(`${pwLen} characters chosen`);
  let typeChoice1 = window.confirm("Do you want lowercase in your password ? ");
  let typeChoice2 = window.confirm("Do you want uppercase in your password? ");
  let typeChoice3 = window.confirm(
    "Do you want special characters i your password? "
  );
  let typeChoice4 = window.confirm("Do you want numbers in your password ? ");
  if (
    typeChoice1 === false &&
    typeChoice2 === false &&
    typeChoice3 === false &&
    typeChoice4 === false
  ) {
    do {
      alert("Please Pick at aleast one criteria true:");
      typeChoice1 = window.confirm("Do you want lowercase in your password ? ");
      typeChoice2 = window.confirm("Do you want uppercase in your password ?");
      typeChoice3 = window.confirm(
        "Do you want special characters in your password ?"
      );
      typeChoice4 = window.confirm("Do you want numbers in your password ?");
    } while (!typeChoice1 && !typeChoice2 && !typeChoice3 && !typeChoice4);
  }
  let possibleChoices = [];
  if (typeChoice1 === true) {
    possibleChoices = possibleChoices.concat(dataLowercase);
  }
  if (typeChoice2) {
    possibleChoices = possibleChoices.concat(dataUppercase);
  }
  if (typeChoice3) {
    possibleChoices = possibleChoices.concat(dataSpecChar);
  }
  if (typeChoice4) {
    possibleChoices = possibleChoices.concat(dataNumbers);
  }
  console.log(possibleChoices);
  // console.log(possibleChoices[0]);
  let password = "";
  for (var i = 0; i < pwLen; i++) {
    let index = Math.floor(Math.random() * possibleChoices.length);
    password += possibleChoices[index];
    console.log(password);
  }
  console.log(password);
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var dataLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var dataSpecChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var dataNumbers = "0123456789".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

function generatePassword() {
  let pwLen = window.prompt(
    "How many characters would you like to use (min: 8, max: 128)"
  );

  if (pwLen < 8 || pwLen > 128 || isNaN(pwLen))
    do {
      pwLen = prompt("Please pick a number betweeen 8 and 128: ");
    } while (pwLen < 8 || pwLen > 128 || isNaN(pwLen));

  window.alert(`${pwLen} characters chosen`);

  let typeChoice1 = window.confirm("Do you want lowercase in your password ? ");

  let typeChoice2 = window.confirm("Do you want uppercase in your password? ");
  let typeChoice3 = window.confirm(
    "Do you want special characters i your password? "
  );
  let typeChoice4 = window.confirm("Do you want numbers in your password ? ");

  if (
    typeChoice1 === false &&
    typeChoice2 === false &&
    typeChoice3 === false &&
    typeChoice4 === false
  ) {
    do {
      alert("Please Pick at aleast one criteria true:");
      typeChoice1 = window.confirm("Do you want lowercase in your password ? ");
      typeChoice2 = window.confirm("Do you want uppercase in your password ?");
      typeChoice3 = window.confirm(
        "Do you want special characters in your password ?"
      );
      typeChoice4 = window.confirm("Do you want numbers in your password ?");
    } while (!typeChoice1 && !typeChoice2 && !typeChoice3 && !typeChoice4);
  }
  let possibleChoices = [];
  if (typeChoice1 === true) {
    possibleChoices = possibleChoices.concat(dataLowercase);
  }
  if (typeChoice2) {
    possibleChoices = possibleChoices.concat(dataUppercase);
  }
  if (typeChoice3) {
    possibleChoices = possibleChoices.concat(dataSpecChar);
  }
  if (typeChoice4) {
    possibleChoices = possibleChoices.concat(dataNumbers);
  }
  console.log(possibleChoices);
  // console.log(possibleChoices[0]);
  let password = "";
  for (var i = 0; i < pwLen; i++) {
    let index = Math.floor(Math.random() * possibleChoices.length);
    password += possibleChoices[index];
    console.log(password);
  }
  console.log(password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
