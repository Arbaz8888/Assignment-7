//STEP 1
function halfNumber(number) {
  var result = number / 2;
  console.log("Half of " + number + " is " + result + ".");
  return result;
}

// Ask for user input
var userInput = prompt("Enter a number:"); // Prompt the user for a number
var number = parseFloat(userInput); // Convert the user input to a floating-point number

if (!isNaN(number)) {
  halfNumber(number); // Call the function with the user's input
} else {
  console.log("Invalid input. Please enter a valid number.");
}
