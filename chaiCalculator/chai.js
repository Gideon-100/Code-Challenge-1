function calculateChaiIngredients() {
    // Prompt user for number of cups
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    let numberOfCups = Number(input);
  
    // Check if the input is a valid number
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
      console.log("Please enter a valid positive number.");
      return;
    }
  
    // Calculate ingredients
    let water = 200 * numberOfCups;       // ml
    let milk = 50 * numberOfCups;         // ml
    let teaLeaves = 1 * numberOfCups;     // tablespoons
    let sugar = 2 * numberOfCups;          // teaspoons
  
    // Print results
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
  }
  
  // Call the function
  calculateChaiIngredients();
  