// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 0

let alphaLc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaUc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let aNum = /[0-9]/;
let aSpec = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

//On click, event listener prompts user for password criteria including length of password (between 8 - 128 characters)
//Prompt for length of password (between 8 - 128 characters)
function generatePassword(){
  length = prompt("How long would like the password to be?  Please select a number betwen 8 and 128")
  if (length < 8 || length > 128) {  
    alert("Please select a number between 8 and 128")
  }
  let alphaLc = prompt("Do you want to use lower case letters within this password?.  Please type Y or N")
  if (alphaLc.toUpperCase() != "Y" || alphaLc.toUpperCase() !="N"){
    alert("Please select Y or N")
  }
  let alphaUc = prompt("Do you want to use upper case letters within this password?.  Please type Y or N")  
  if (alphaUc.toUpperCase() != "Y" || alphaLc.toUpperCase() !="N") {
    alert("Please select Y or N")
  }
  let num = prompt("Do you want to use numbers within this password?.  Please type Y or N")
  if (num() != 0,1,2,3,4,5,6,7,8,9 !="N") {
      alert("Please select Y or N") 
  }
      let charSc = prompt("Do you want to use special characters within this password?.  Please type Y or N")
  if (charSc() != "Y" || charSc() !="N"){
      alert("Please enter a special character") 
  }

function PwGood(password) {
    var alphaUc = /[A-Z]/;
    var alphaLc = /[a-z]/; 
    var aNum = /[0-9]/;
    var aSpec = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    var obj = {};
    obj.result = true;

    if(length < 8 || length > 128){
        obj.result=false;
        obj.error="Not long enough!"
        return obj;
    }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(password);
  var passwordText = document.querySelector("#password");
   if (password)

  passwordText.value = password;
  return password;
}


//Click to generate new, secure password

for (let i = 0; i < password.length; i++) {
    let newEl = document.createElement("button");
}

}
