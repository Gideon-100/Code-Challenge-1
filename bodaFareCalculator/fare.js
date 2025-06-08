function calculateBodaFare() {
    // Prompt the user for distance
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    let distanceInKm = Number(input);
  
    // Validate input
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
      console.log("Tafadhali ingiza nambari halali ya kilomita.");
      return;
    }
  
    // Fare calculation
    const baseFare = 50;
    const chargePerKm = 15;
    const distanceFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceFare;
  
    // Output
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
  }
  
  // Call the function
  calculateBodaFare();
  