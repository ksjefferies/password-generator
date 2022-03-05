// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare and initialize arrays
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//evaluate the value of the checkboxes and concat them into a single array and exit if none are found
function checkCriteria() {
    var allowUpperCase = document.getElementById('allowUpper').checked
    var allowLowerCase = document.getElementById('allowLower').checked
    var allowNumbers = document.getElementById('allowNumbers').checked
    var allowSpecials = document.getElementById('allowSpecial').checked
    var passwordLength = document.getElementById('passwordInput').value
    var charSet = [];

    if (allowUpperCase + allowLowerCase + allowNumbers + allowSpecials == 0) {
        return;
    }
    if (allowUpperCase) {
        charSet = charSet.concat(upperCaseChars);
    }
    if (allowLowerCase) {
        charSet = charSet.concat(lowerCaseChars);
    }
    if (allowNumbers) {
        charSet = charSet.concat(numbers);
    }
    if (allowSpecials) {
        charSet = charSet.concat(specialChars);
    }
    var password = generatePassword(passwordLength, charSet);
    writePassword(password)
}

// receive length and selected criteria array to randomize the contents
function generatePassword(length, charSet) {
    var finalResult = "";
    for (var i = 0; i < length; i++) {
        var index = Math.floor((Math.random() * charSet.length));
        finalResult += charSet[index];
    }
    return finalResult
}

//  Receive password from checkCriteria() ad write password to the #password input
function writePassword(pass) {

    var passwordText = document.querySelector("#password");
    passwordText.value = pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", checkCriteria);