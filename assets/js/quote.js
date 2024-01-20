// 1) declare our variables


// building type buttons
const residentialButton = document.getElementById("residentialBuilding");

const commercialButton = document.getElementById("commercialBuilding");

const industrialButton = document.getElementById("industrialBuilding");

// input fields
const numberOfApartments = document.getElementById("numberOfApartments");
const numberOfFloors = document.getElementById("numberOfFloors");
const maxOccupancyOfEachFloor = document.getElementById("max-OccupancyOfEachFloor");
const numberOfElevators = document.getElementById("numberOfElevatorsPresent");


// product tier unit price per elevator
const standardButton = document.getElementById("standard");
const premiumButton = document.getElementById("premium");
const exceliumButton = document.getElementById("excelium");

// Business rules
const pricePerElevator = {
  'standard': 8000,
  'premium': 12000,
  'excelium': 15000
};

// installation fees
const installationFeePercentage = {
  'standard': 10,
  'premium': 15,
  'excelium': 20
};



// output fields
const elevatorsRequired = document.getElementById("numberOfRequiredElevators");
const elevatorUnitPrice = document.getElementById("pricePerElevator");
const installationFees = document.getElementById("installationFees");
const finalCost = document.getElementById("finalCostEstimate");

// ----------------------------------------------------------------------------------------------------------------

// 2) add event listeners!

// waits for the residential button to be clicked
residentialButton.addEventListener("click", () => {
  // showing an html element
  numberOfApartments.style.display = "block";
  // hiding an html element
  // commercialButton.style.display = "none";
  // industrialButton.style.display = "none";
  //showing an html element
  numberOfFloors.style.display = "block";
  //showing an html element
  maxOccupancyOfEachFloor.style.display = "none";

  console.log("You clicked the residential button!");

})

//waits for the commercial button to be clicked
commercialButton.addEventListener("click", () => {
  //showing an html element
  numberOfApartments.style.display = "none";
  numberOfFloors.style.display = "block";
  maxOccupancyOfEachFloor.style.display = "block";

  console.log("You clicked the commercial button!");

})

//waits for the industrial biutton to be clicked
industrialButton.addEventListener("click", () => {
  //showing an html element
  numberOfApartments.style.display = "none";
  numberOfFloors.style.display = "none";
  numberOfElevators.style.display = "block";
  maxOccupancyOfEachFloor.style.display = "none";

  console.log("You clicked the industrial button!");

})

standardButton.addEventListener("click", () => {
  //showing an html element
  elevatorsRequired.style.display = "none";
  pricePerElevator.style.display = "block";
  installationFees.style.display = "block";
  finalCost.style.display = "none";


})

premiumButton.addEventListener("click", () => {
  //showing an html element
  numberOfElevators.style.display = "none";
  pricePerElevator.style.display = "block";
  installationFees.style.display = "block";
  finalCost.style.display = "none";

})

// -------------------------------------------------------------------------------------------------------------

// 3) write out functions that do things

// hiding/displaying of the fields

function hideSheet() {
  standardButton.style.display = "none";
  premiumButton.style.display = "none";
  exceliumButton.style.display = "none";
  numberOfApartments.style.display = "none";
  numberOfFloors.style.display = "none";
  maxOccupancyOfEachFloor.style.display = "none";
  numberOfElevators.style.display = "none";
  installationFees.style.display = "none";
  finalCost.style.display = "none";

}
hideSheet()

// calculations 

// const numberOfApartments = document.getElementById("numberOfApartments");
// const numberOfFloors = document.getElementById("numberOfFloors");
// const maxOccupancyOfEachFloor = document.getElementById("max-OccupancyOfEachFloor")
// const numberOfElevators = document.getElementById("numberOfElevatorsPresent");

// output fields
// const elevatorsRequired = document.getElementById("numberOfRequiredElevators");

function calcRes() {
  const averageNumberOfApartments = Math.ceil(numberOfApartments) / Math.ceil(numberOfFloors);
  const numberOfResElevators = Math.ceil(averageNumberOfApartments / 6);
  const numberOfResBanks = Math.ceil(numberOfFloors / 20);
  return elevatorsRequired.value = Math.ceil(numberOfResElevators * numberOfResBanks);
}

// "If the type of building is Residential, divide the number of apartments by the number of floor to obtain and an average number of apartments per floor and require an elevator for every 6 apartments per floor. If the building has more than 20 stories, it is necessary to provide an additional elevator bank and thus double the number of elevators. A new elevator bank is therefore added to each new group of 20 stories."

function calcCom() {
  const numOfTotalOccupants = (maxOccupancyOfEachFloor) * (numberOfFloors);
  const numberOfComElevatorBanks = (numOfTotalOccupants / 200);
  const numberOfComBanksRequired = (numberOfFloors / 10) + 1;
  return elevatorsRequired.value = Math.ceil(numberOfComElevatorBanks * numberOfComBanksRequired);
}

// "If the type of building is Commercial, multiply the maximum occupancy of each floor by the number of floors to obtain the total number of occupants. The number of elevators required per elevator bank is determined by dividing the total number of occupants by 200. The number of elevator banks required is determined by dividing the number of floors divided by 10. For commercial buildings, to obtain the number of freight elevators needed use the number of floors divided by 10 plus one."

function calcInd() {
  const numberOfElevators = numberOfElevators;
  return elevatorsRequired.value = Math.ceil(numberOfElevators);
}

// "If the type of building is Industrial, the number of elevators required is equal to the number as the input."

// functions to set up product tier
function productTierSetUp(productTier) {
  if (productTier === 'standard') {
    return 'product standard tier set up configuration';
  } else if (productTier === 'premium') {
    return 'product premium tier set up configuration';
  } else if (qualityType === 'excelium') {
    return 'product excelium tier set up configuration';
  } else {
    return 'Invalid product tier type';
  }
}

// total price function
function finalPrice() {
  finalPrice.value = elevatorsRequired * elevatorUnitPrice + installationFeePercentage
}

// resets the form back to the start
function resetValues() {
  document.getElementById("numberOfApartments").reset();
  document.getElementById("numberOfFloors").reset();
  document.getElementById("max-OccupancyOfEachFloor").reset();
  document.getElementById("numberOfElevatorsPresent").reset();

} 