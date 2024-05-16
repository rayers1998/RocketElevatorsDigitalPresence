//STEP 1

//Variables for dropdown selection
const buildingType = document.getElementById("building-type");
const qualityType = document.getElementById("quality-type");

const residentialButton = document.getElementById("residential");
const commercialButton = document.getElementById("commercial");
const industrialButton = document.getElementById("industrial");

//Variables for Input Services
const numberOfFloors = document.getElementById("number-of-floors");
const numberOfApartments = document.getElementById("number-of-apartments");
const  maxOccupancyOfEachFloor = document.getElementById("maximum-occupancy");
const numberOfElevators = document.getElementById("number-of-elevators");

//Variables for Radio Section
let standardButton = document.getElementById("standard");
let premiumButton = document.getElementById("premium");
let exceliumButton = document.getElementById("excelium");

//Variables for Results Section
let elevatorOutput = document.getElementById("elevators-needed-output");
let unitPriceOutput = document.getElementById("unit-price-each-elevator");
let installFeeOutput = document.getElementById("installation-fees");
let finalCostOutput = document.getElementById("final-cost");

//Variables for Display Containers
const inputContainer = document.getElementById("inputContainer")
const qualityContainer = document.getElementById("qualityContainer")
const outputContainer = document.getElementById("outputContainer")


//Function to calculate "Number of Elevators Needed" - Residential Service 
function calcRes() {
  const averageNumberOfApartments = Math.ceil(Number(apartmentInput.value)) / Math.ceil(Number(floorInput.value));
  const numberOfResElevators = Math.ceil(averageNumberOfApartments / 6);
  const numberOfResBanks = Math.ceil(Number(floorInput.value / 20));
  console.log (averageNumberOfApartments, numberOfResElevators, numberOfResBanks);
  
  return numberOfElevatorsNeededoutput.value = Math.ceil(numberOfResElevators * numberOfResBanks);}
//"If the type of building is Residential, divide the number of apartments by the number of floors to obtain an average number of apartments per floor and require an elevator for every 6 apartments per floor.
//If the building has more than 20 stories, it is necessary to provide an additional elevator bank and thus double the number of elevators. 
//A new elevator bank is therefore added to each new group of 20 stories."


//Function to calculate "Number of Elevators Needed" - Commercial Service 
function calcCom() {
  const numOfTotalOccupants = (Number(maxOccupancyOfEachFloor)) * (Number(numberOfFloors));
  const numberOfComElevatorBanks = (Number(numOfTotalOccupants) / 200);
  const numberOfComBanksRequired = (Number(numberOfFloors) / 10) + 1;
  console.log (maxOccupancyOfEachFloor, numberOfFloors);
  return elevatorOutput.value = Math.ceil(numberOfComElevatorBanks * numberOfComBanksRequired);
}
//"If the type of building is Commercial, multiply the maximum occupancy of each floor by the number of floors to obtain the total number of occupants. 
//The number of elevators required per elevator bank is determined by dividing the total number of occupants by 200. 
//The number of elevator banks required is determined by dividing the number of floors divided by 10. 
//For commercial buildings, to obtain the number of freight elevators needed use the number of floors divided by 10 plus one."


//Function to calculate "Number of Elevators Needed" - Industrial Service
function calcInd() {
  const numberOfElevators = (Number(numberOfElevators));
  console.log (numberOfElevators);
  return elevatorsRequired.value = Math.ceil(numberOfElevators);
}
//"If the type of building is Industrial, the number of elevators required is equal to the number as the input."


//Function to handle changes to number inputs based on dropdown value + SHOW/HIDE element
const apartmentInput = document.getElementById("apartments-input");
const floorInput = document.getElementById("floors-input");
const occupancyInput = document.getElementById("occupancy-input")
const elevatorInput = document.getElementById("elevator-input")


//Building Type and it's variables
const buildingTypeFields = {
  residential: [
      "number-of-apartments",
      "number-of-floors",
  ],
  commercial: [
      "number-of-floors",
      "maximum-occupancy",
  ],
  industrial: [
      "number-of-elevators",
  ]
};


//Quality Type Prices
const pricePerElevator = {
  'standard': 8000,
  'premium': 12000,
  'excelium': 15000
};

//Installation fees
const installationFeePercentage = {
  'standard': 10,
  'premium': 15,
  'excelium': 20
};


function hideSheet() {
  inputContainer.style.display = "none"
  outputContainer.style.display = "none"
  qualityContainer.style.display = "none"
 }
hideSheet()

//-------------------------------------------------------------------------------------------------------------------------------------
//STEP 2 add event listeners!


// RESIDENTIAL BUTTON
// Event Listener for the residential button to be clicked
residentialButton.addEventListener("click", () => {
  console.log("Residential button clicked");
  numberOfElevators.style.display = "none";
  numberOfFloors.style.display = "block";
  numberOfApartments.style.display = "block";
  maxOccupancyOfEachFloor.style.display = "none";
  
  inputContainer.style.display = "block";
  outputContainer.style.display = "block";
  qualityContainer.style.display = "block";

  resetValues();
  console.log("You clicked the residential button!");
  })
  // numberOfElevators.style.display = "none";
  // numberOfApartments.style.display = "block";
  // commercialButton.style.display = "block";
  // industrialButton.style.display = "block";
  // numberOfFloors.style.display = "block";
  // maxOccupancyOfEachFloor.style.display = "none";

  // inputContainer.style.display = "block"
  // outputContainer.style.display = "block"
  // qualityContainer.style.display = "block"
  
  // apartmentInput.addEventListener("input", () => {
  //   calcRes(); 
  //   priceCheck();
  //   console.log("I did residentiaL math");
  //   })
  //   floorInput.addEventListener("input", () => {
  //   calcRes(); 
  //   priceCheck();
  //     console.log("I did residentiaL math");
  //   })
  //   maxOccupancyOfEachFloor.addEventListener("input", () => {
  //   calcCom(); 
  //   priceCheck();
  //     console.log("I did residentiaL math");
  //   })
  //   elevatorInput.addEventListener("input", () => {
  //     calcCom(); 
  //     priceCheck();
  //       console.log("I did residentiaL math");
  //     })


// COMMERCIAL BUTTON
// Event listener for the commercial button to be clicked
commercialButton.addEventListener("click", () => {
  console.log("commercial button clicked");
  numberOfElevators.style.display = "none";
  numberOfApartments.style.display = "none";
  numberOfFloors.style.display = "block";
  maxOccupancyOfEachFloor.style.display = "block";
  
  inputContainer.style.display = "block";
  outputContainer.style.display = "block";
  qualityContainer.style.display = "block";
  
  resetValues();
  console.log("You clicked the commercial button!");
})


//INDUSTRIAL BUTTON
// Event listener for the industrial button to be clicked
industrialButton.addEventListener("click", () => {
  console.log("industrial button clicked");
  numberOfElevators.style.display = "block";
  numberOfApartments.style.display = "none";
  numberOfFloors.style.display = "none";
  maxOccupancyOfEachFloor.style.display = "none";
  
  inputContainer.style.display = "block";
  outputContainer.style.display = "block";
  qualityContainer.style.display = "block";
  
  resetValues();
  console.log("You clicked the industrial button!");
})





//STANDARD BUTTON
// Event Listener for the standard button to be clicked
standardButton.addEventListener("click", () => {
   unitPriceOutput.value = 8000;
   installFeeOutput.value = 1.1;
   finalPrice()
   console.log("Standard")
})


//PREMIUM BUTTON
// Event Listener for the premium button to be clicked
premiumButton.addEventListener("click", () => {
  unitPriceOutput.value = 12000;
  installFeeOutput.value = 1.15;
  finalPrice()
  console.log("Premium")
})


//EXCELIUM BUTTON
// Event Listener for the excelium button to be clicked
exceliumButton.addEventListener("click", () => {
  unitPriceOutput.value = 15000;
  installFeeOutput.value = 1.2;
  finalPrice()
  console.log("Excelium")
})


// -------------------------------------------------------------------------------------------------------------
//STEP 3

// functions to set up product type
function qualityTypeTypeSetUp(qualityType) {
  if (qualityType === 'standard') {
    return 'product standard tier set up configuration';
  } else if (qualityType === 'premium') {
    return 'product premium tier set up configuration';
  } else if (qualityType === 'excelium') {
    return 'product excelium tier set up configuration';
  } else {
    return 'Invalid product tier type';
  }
}

// total price function
function finalPrice() {
  finalCostOutput.value = elevatorOutput.value * unitPriceOutput.value * installFeeOutput.value
}

// resets the form back to the start
function resetValues() {
  document.getElementById("numberOfApartments").reset();
  document.getElementById("numberOfFloors").reset();
  document.getElementById("max-OccupancyOfEachFloor").reset();
  document.getElementById("numberOfElevatorsPresent").reset();

} 



// function to toggle button displays
function selectButton(selectedId) {
  // List of all button IDs
  var allButtons = ['residential', 'commercial', 'industrial'];

  // Loop through all button IDs
  allButtons.forEach(function(btnId) {
      // Get the button element by its ID
      var button = document.getElementById(btnId);

      // If the current button is not the selected one, hide it
      if (btnId !== selectedId) {
          button.style.display = 'none';
      } else {
          // Otherwise, make sure it is visible (in case it was previously hidden)
          button.style.display = 'inline-block';
      }
  });
}



// function to toggle button displays
function selectButton2(selectedId) {
  // List of all button IDs
  var allButtons = ['Standard', 'Premium', 'Excelium'];

  // Loop through all button IDs
  allButtons.forEach(function(btnId) {
      // Get the button element by its ID
      var button = document.getElementById(btnId);

      // If the current button is not the selected one, hide it
      if (btnId !== selectedId) {
          button.style.display = 'none';
      } else {
          // Otherwise, make sure it is visible (in case it was previously hidden)
          button.style.display = 'inline-block';
      }
  });
}