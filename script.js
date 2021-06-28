// Assignment Code
var generateBtn = document.querySelector('#generate');
var passwordLength = 8-128
const passwordText = document.querySelector('#password')
const numbers = '0123456789';
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = '!@#$%^&*()_-=+';

//set password complexity

function getLowercase() {
  return lowerCase[Math.floor(Math.random() *
    lowerCase.length)];
}
function getUppercase() {
  return upperCase[Math.floor(Math.random() *
    upperCase.length)];
} 
function getNumber() {
  return numbers[Math.floor(Math.random() *
    numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() *
    symbols.length)];
}

// Write password to the #password input


var passwordGeneration = function () {
  
  let password = '';

  var passwordLength = window.prompt('Set password length between 8 - 128 characters');
  if(passwordLength <8){
    window.alert('Password must be longer the 8 characters')
    
  }else if(passwordLength >128) {
    window.alert('Password must be less then 128 characters')
  }else {
  var numbers = window.confirm('Would you like your password to contain numbers?');
  if (numbers === true) {
    writePassword += getNumber();
  }
  var uppercase = window.confirm('Would you like your password to contain uppercase letters?');
  if (uppercase === true) {
    writePassword += getUppercase
  }
  var lowercase = window.confirm('Would you like your password to contain lowercase letters?');
  if (lowercase === true) {
    writePassword += getLowercase
  }
  var symbols = window.confirm('Would you like your password to contain special characters?');
  if (symbols === true) {
    writePassword += getSymbol
  }
  for (let i = passwordGeneration.length; i < passwordLength; i++){
    const x = generateX();
    password += x;
  }

  passwordText.innerText = password

function generateX() {
  const xs = [];
  if (numbers === true) {
    xs.push(getNumber());
  }
  if (uppercase === true) {
    xs.push(getUppercase());
  } 
  if (lowercase === true) {
    xs.push(getLowercase());
  } 
  if (symbols === true) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}
}
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
} 

// Add event listener to generate button
generateBtn.addEventListener('click', passwordGeneration);


