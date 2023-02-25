var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// passwordText.addEventListener("click", (e) => {
//   e.stopPropagation();
//   if (passwordText.value !== "") {
//     passwordText.select();
//     navigator.clipboard.writeText(passwordText.value);
//     alert("Copied password to clipboard");
//   }
// });

// let password = "";
// let chars = "";

let pwLen = window.prompt(
  "How many characters would you like to use (min: 8, max: 128)"
);

if (pwLen < 8 || pwLen > 128 || isNaN(pwLen))
  do {
    pwLen = prompt("Please pick a number betweeen 8 and 128: ");
  } while (pwLen < 8 || pwLen > 128 || isNaN(pwLen));

window.alert(`${pwLen} characters chosen`);

let typeChoice1 = window.confirm("Do you want lowercase in your password ? ");
console.log(typeChoice1);

let typeChoice2 = window.confirm("Do you want uppercase in your password? ");
console.log(typeChoice2);
let typeChoice3 = window.confirm(
  "Do you want special characters i your password? "
);
console.log(typeChoice3);
let typeChoice4 = window.confirm("Do you want numbers in your password ? ");
console.log(typeChoice4);

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

//window.alert(`Eligible Password Characters: ${chars}`);

//var alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

var dataLowercase = "abcdefghijklmnopqrstuvwxyz".split();
var dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var dataSpecChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split();
var dataNumbers = "0123456789".split();

function generatePassword() {
  const data = [].concat(
    typeChoice1 ? dataLowercase : [],
    typeChoice2 ? dataUppercase : [],
    typeChoice3 ? dataSpecChar : [],
    typeChoice4 ? dataNumbers : []
  );

  for (let i = 0; i < pwLen; i++) {
    let choice = pwLen[i];
    index = typeChoice[i] - 1;
    chars += charArr[index];
  }

  for (let i = 0; i < pwLen; i++) {
    let charInd = Math.floor(Math.random() * chars.length);
    password += chars[charInd];

    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
