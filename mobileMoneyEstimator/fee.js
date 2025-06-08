function estimateTransactionFee(amountToSend) {
    // Calculate 1.5% of the amount
    let fee = amountToSend * 0.015;
  
    // Enforce min and max fee limits
    if (fee < 10) {
      fee = 10;
    } else if (fee > 70) {
      fee = 70;
    }
  
    // Calculate total amount debited
    let total = amountToSend + fee;
  
    // Print the results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("\nSend Money Securely!");
  }
  
  // Prompt the user and run the function
  let input = prompt("Unatuma Ngapi? (KES):");
  let amount = Number(input);
  
  if (!isNaN(amount) && amount > 0) {
    estimateTransactionFee(amount);
  } else {
    console.log("Tafadhali weka kiasi halali cha kutuma.");
  }
  