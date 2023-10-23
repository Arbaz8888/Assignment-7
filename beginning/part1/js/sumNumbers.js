//STEP 5
function sumNumbers() {
    var userInput = prompt("Enter numbers separated by commas:");
    var numbersArray = userInput.split(',');
    var sum = 0;
  
    for (var i = 0; i < numbersArray.length; i++) {
      var number = parseFloat(numbersArray[i]);
      if (!isNaN(number)) {
        sum += number;
      }
    }
  
    return sum;
  }
  var totalSum = sumNumbers();
  console.log("The sum of the entered numbers is: " + totalSum);