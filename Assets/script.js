// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split(""); //split converts the string into an array
var upperCase = "ABCDEFGHIJKLMNOPQRUSTUVWXYZ".split("");
var specialChar = "!@#$%^&*()".split("");
var numberChar = "12345678".split("");
// console.log(lowerCase)
// console.log(upperCase)
// console.log(specialChar)
// console.log(numberChar)

// Write password to the #password input
function writePassword() {
  // alert("working")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var password = ("num" );
  var userInput = prompt("How long do you want your password to be. Must be between 8 and 128")
  // console.log (userInput)

  if (!userInput){
    return "Your Secure Password" ;
  } //cancels the function if the user cancels at the number selection.

  if (isNaN(userInput) || userInput < 8 || userInput > 128){
    // console.log("User Input is" + userInput);
    alert("Please enter a number between 8 and 128");
    generatePassword(); // checks the user input. "isNaN" checks if it is a number.
  }
    
  // console.log("User Input is" + userInput);
  // Lines 44 - 50 confirms the users choices 
  var results =[]
  var upCase = confirm("Do you want UPPERCASE letter?");
  // console.log(upCase)
  var lwCase = confirm("Do you want lowercase letters?");
  // console.log(lwCase)
  var nums = confirm("Do you want Numbers?");
  // console.log(nums)
  var spcChar = confirm("Do you want Special Characters?");
  // console.log(spcChar)
  
  
    if (!upCase && !lwCase && !nums && !spcChar ){
      // console.log("Both False")
      alert("Select at least one type of character you want")
      generatePassword();
      }
// Lines 60-78 combines the chosen arrays
    if (upCase) {
      results = results.concat(upperCase)
      // console.log(results)
    }

    if (lwCase) {
      results = results.concat(lowerCase)
      // console.log(results)
    }
    
    if (nums) {
      results = results.concat(numberChar)
      // console.log(results)
    }

    if (spcChar) {
      results = results.concat(specialChar)
      // console.log(results)
    }
    
    // console.log(results)
    // console.log("the array length is " + results.length)
  //lines 83 - 87 creates a new array using random characters from the "results" array. It loops through and picks random characers and pushes it into the new array the amount of times the user decided.
      var randString = [];
      for (var i = 0; i < userInput; i++) {
        var randomInt = Math.round(Math.random()*(results.length - 1));
        console.log ("randomInt" + randomInt);
        randString.push(results[randomInt]);
      }
      console.log(randString)

password = randString.join(""); // converts the array into a string
console.log(password)

   
  return password //returns the final password array. 
}


//ask for lengh of the password
  //prompt 
  //save it to variable
//check the length provided by users is a number between 8 and 128
//confirm : 4
  //uppercase
  //lowercase
  //numbers
  //special characters
// save it to a
// combine the confirmed arrawys  
//check at least one should be selected by the user Confirm is a bouleen value true or fallse
  //save it to variable  
// create and array for upercase, lowercase, special characters, numbers

// create and array variable to have a new password with length provided by user []
// random item from combined arry and push it ot he the password array and do this to sep up to the length