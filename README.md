# JavaScriptProject3
Project Title
Making a Password Gen

Product Description:
For this project we were tasked to write code that would generate a password based what the user inputed after a series of prompts. To use this product the user will click on the button. A prompt will open asking how many characters the user wants. If the user does not put in a number between 8-128 then it will ask again. Then there will be four confirm prompts that ask if the user wants uppercase, lowercase, special and numarical characters. If they user wants none of these it will re-run the function. Then the password will appear in the box based on the number of characters the user picked and they types of characters the user wanted. 

To start I added a series of strings that included the 4 separate types of characters that are asked for. I then converted the strings to arrays.
Nexted I need the prompt to appear asking for the user input to start the function. I created to 'If" statements, the first ends the function if the user cancels the first prompt. The second "if" statement verifies that the user entered a number and they number is between 8 and 128.

Next I added a varible "results" and set it as an array. Next is as series of confirm fuctions that ask for the types of characters that are needed. 
and "If" statment is maded to verifiy that at least one special character was picked.

Lines 60 - 78 of the code takes and combines the arrays based on the user input.
lines 83 - 87 creates a new array using random characters from the "results" array. It loops through and picks random characers and pushes it into the new array the amount of times the user decided.
That array is converted to a string
the function returns with the printed password.

Below is the pseudocodeg for the password gen.
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
