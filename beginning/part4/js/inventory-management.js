// Define the inventory array with product details
var inventory = [
    [4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39.99],
    [3223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99]
  ];
  
  // Display the title and command menu
  console.log("Inventory Management System");
  console.log("Commands: view, update, exit");
  
  // Function to display product details
  function displayProducts() {
    console.log("Product Details:");
    for (var i = 0; i < inventory.length; i++) {
      var product = inventory[i];
      console.log(`${product[0]} ${product[1]} (${product[2]}) $${product[3].toFixed(2)}`);
    }
  }
  
  // Function to update product quantity
  function updateProductQuantity() {
    var sku = parseInt(prompt("Enter the SKU of the product to update:"));
    var newQuantity = parseFloat(prompt("Enter the new stock quantity:"));
    
    for (var i = 0; i < inventory.length; i++) {
      if (inventory[i][0] === sku) {
        inventory[i][2] = newQuantity;
        console.log(`Product with SKU ${sku} has been updated.`);
        return;
      }
    }
    
    console.log(`Product with SKU ${sku} not found.`);
  }
  
  
  // Main loop
  while (true) {
    var command = prompt("Enter a command (view, update, exit):").toLowerCase();
  
    if (command === "view") {
      displayProducts();
    } else if (command === "update") {
      updateProductQuantity();
    } else if (command === "exit") {
      console.log("Exiting the program.");
      break;
    } else {
      console.log("Invalid command. Please try again.");
    }
  }
  