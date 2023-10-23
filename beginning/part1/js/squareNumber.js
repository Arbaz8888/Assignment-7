//STEP 2
function squareNumber(number) {
    var result = number * number;
    console.log("The result of squaring the number " + number + " is " + result + ".");
    return result;
  }
  
  // Ask for user input
  var userInput = prompt("Enter a number:"); // Prompt the user for a number
  var number = parseFloat(userInput); // Convert the user input to a floating-point number
  
  if (!isNaN(number)) {
    squareNumber(number); // Call the function with the user's input
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
  