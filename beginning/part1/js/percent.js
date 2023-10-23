//STEP 3
function percentOf(number1, number2) {
    var result = (number1 / number2) * 100;
    console.log(number1 + " is " + result + "% of " + number2 + ".");
    return result;
  }
  
  // Ask for user input
  var userInput1 = prompt("Enter the first number:"); // Prompt the user for the first number
  var userInput2 = prompt("Enter the second number:"); // Prompt the user for the second number
  
  var number1 = parseFloat(userInput1); // Convert the first user input to a floating-point number
  var number2 = parseFloat(userInput2); // Convert the second user input to a floating-point number
  
  if (!isNaN(number1) && !isNaN(number2)) {
    percentOf(number1, number2); // Call the function with the user's inputs
  } else {
    console.log("Invalid input. Please enter valid numbers.");
  }
  