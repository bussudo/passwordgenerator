// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var length = 0;

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

passwordText.addEventListener("click", (e) => {
  e.stopPropagation();
  if (passwordText.value !== "") {
    passwordText.select();
    navigator.clipboard.writeText(passwordText.value);
    alert("Copied password to clipboard");
  }
});

let charArray = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
];

function generatePassword() {
  let password = "";
  let chars = "";

  // length = prompt("How long would like the password to be?  Please select a number betwen 8 and 128")
  // if (length < 8 || length > 128) {
  //   alert("Please select a number between 8 and 128")
  // }

  let length = window.prompt(
    "How many characters do you want to use (min: 8, max: 128)"
  );

  if (length === null || length === undefined) {
    return "";
  }

  length = isNaN(length) || length === "" ? 0 : length;
  if (length < 8 || length > 128 || isNaN(length))
    do {
      length = prompt(
        `${length} characters selected.  Please specify a length between 8 and 128 characters`
      );
      if (length === null || length === undefined) {
        return "";
      }
      length = isNaN(length) || length === "" ? 0 : length;
    } while (length < 8 || length > 128);

  window.alert(`${length} characters selected`);

  let typeSelect = window.prompt(
    `Please specify the type of characters you would like to use.\n 1. lowercase\n 2. UPPERCASE\n 3. Special Characters\n 4. Numbers\n`
  );

  if (typeSelect === null || length === undefined) return "";

  typeSelect = typeSelect.replace(" ", "");

  if (
    typeSelect.indexOf(0) === -1 &&
    typeSelect.indexOf(1) === -1 &&
    typeSelect.indexOf(2) === -1 &&
    typeSelect.indexOf(3) === -1
  )
    do {
      typeSelect = window.prompt(
        `Incorrect input.  Please specify the type of characters you would like to use.\n 1. lowercase\n 2. UPPERCASE\n 3. Special Characters\n 4. Numbers\n`
      );
      if (typeSelect === null || typeSelect === undefined)
        return "Your secure password";
      typeSelect = typeSelect.replace(" ", "");
    } while (length < 8 || length > 128);

  window.alert(`${length} characters chosen`);

  if (typeSelect === null || length === undefined) return "";

  typeSelect = typeSelect.replace(" ", "");

  if (
    typeSelect.indexOf(0) === -1 &&
    typeSelect.indexOf(1) === -1 &&
    typeSelect.indexOf(2) === -1 &&
    typeSelect.indexOf(3) === -1
  )
    do {
      typeSelect = window.prompt(
        `Incorrect input.  Please specify the type of characters you would like to use.\n 1. lowercase\n 2. UPPERCASE\n 3. Special Characters\n 4. Numbers\n`
      );
      if (typeSelect === null || typeSelect === undefined)
        return "Your secure password";
      typeSelect = typeSelect.replace(" ", "");
    } while (
      typeSelect.indexOf(0) === -1 &&
      typeSelect.indexOf(1) === -1 &&
      typeSelect.indexOf(2) === -1 &&
      typeSelect.indexOf(3) === -1
    );

  for (let i = 0; i < typeSelect.length; i++) {
    let select = typeSelect[i];
    if ("0123".indexOf(select) > -1) {
      index = typeSelect[i] - 1;
      chars += charArray[index];
    }
  }

  window.alert(`Eligible Password Characers: ${chars}`);

  for (let i = 0; i < length; i++) {
    let charInd = Math.floor(Math.random() * chars.length);
    password += chars[charInd];
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);
//   }
//   let alphaLc = prompt("Do you want to use lower case letters within this password?.  Please type Y or N")
//   if (alphaLc.toUpperCase() != "Y" || alphaLc.toUpperCase() !="N"){
//     alert("Please select Y or N")
//   }
//   let alphaUc = prompt("Do you want to use upper case letters within this password?.  Please type Y or N")
//   if (alphaUc.toUpperCase() != "Y" || alphaLc.toUpperCase() !="N") {
//     alert("Please select Y or N")
//   }
//   let num = prompt("Do you want to use numbers within this password?.  Please type Y or N")
//   if (num() != 0,1,2,3,4,5,6,7,8,9 !="N") {
//       alert("Please select Y or N")
//   }
//       let charSc = prompt("Do you want to use special characters within this password?.  Please type Y or N")
//   if (charSc() != "Y" || charSc() !="N"){
//       alert("Please enter a special character")
//   }

// function PwGood(password) {
//     var alphaUc = /[A-Z]/;
//     var alphaLc = /[a-z]/;
//     var aNum = /[0-9]/;
//     var aSpec = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
//     var obj = {};
//     obj.result = true;

//     if(length < 8 || length > 128){
//         obj.result=false;
//         obj.error="Not long enough!"
//         return obj;
//     }

// }
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(password);
//   var passwordText = document.querySelector("#password");
//    if (password)

//   passwordText.value = password;
//   return password;
// }

// //Click to generate new, secure password

// for (let i = 0; i < password.length; i++) {
//     let newEl = document.createElement("button");
// }
