// Variables for dropdown selection
const residentialButton = document.getElementById("residential");
const commercialButton = document.getElementById("commercial");
const industrialButton = document.getElementById("industrial");

// Variables for Input Services
const numberOfFloors = document.getElementById("floors-input");
const numberOfApartments = document.getElementById("apartments-input");
const maxOccupancyOfEachFloor = document.getElementById("occupancy-input");
const numberOfElevators = document.getElementById("elevators-input");

const floorNumber = document.getElementById("number-of-floors")
const maximumOccupancy = document.getElementById("maximum-occupancy")
const apartmentnumber = document.getElementById("number-of-apartments")
const elevatornumber = document.getElementById ("number-of-elevators")

// Variables for Radio Section
const standardButton = document.getElementById("standard");
const premiumButton = document.getElementById("premium");
const exceliumButton = document.getElementById("excelium");

// Variables for Results Section
const elevatorOutput = document.getElementById("elevators-needed-output");
const unitPriceOutput = document.getElementById("unit-price-each-elevator");
const installFeeOutput = document.getElementById("installation-fees");
const finalCostOutput = document.getElementById("final-cost");

// Variables for Display Containers
const inputContainer = document.getElementById("inputContainer");
const qualityContainer = document.getElementById("qualityContainer");
const outputContainer = document.getElementById("outputContainer");



// Function to hide elements initially
function hideSheet() {
  inputContainer.style.display = "none";
  outputContainer.style.display = "none";
  qualityContainer.style.display = "none";
}
hideSheet();

// Functions to calculate "Number of Elevators Needed"

// Residential Service Calculation
function calcRes() {
  const averageNumberOfApartments = Math.ceil(Number(numberOfApartments.value) / Number(numberOfFloors.value));
  const numberOfResElevators = Math.ceil(averageNumberOfApartments / 6);
  const numberOfResBanks = Math.ceil(Number(numberOfFloors.value) / 20);
  const totalResElevators = Math.ceil(numberOfResElevators * numberOfResBanks);
  elevatorOutput.value = totalResElevators;
 updatefinalCost();
 }

// Commercial Service Calculation
function calcCom() {
  const numOfTotalOccupants = Number(maxOccupancyOfEachFloor.value) * Number(numberOfFloors.value);
  const numberOfComElevatorBanks = numOfTotalOccupants / 200;
  const numberOfComBanksRequired = Math.ceil(Number(numberOfFloors.value) / 10);
  const totalComElevators = Math.ceil(numberOfComElevatorBanks * numberOfComBanksRequired);
  elevatorOutput.value = totalComElevators;
  updatefinalCost();
}

// Industrial Service Calculation
function calcInd() {
  const totalIndElevators = Math.ceil(Number(numberOfElevators.value));
  elevatorOutput.value = totalIndElevators;
  updatefinalCost();
} 




// Event listeners for buttons

// Residential Button
residentialButton.addEventListener("click", () => {
  floorNumber.style.display = "block";
  apartmentnumber.style.display = "block";
  maximumOccupancy.style.display = "none";
  elevatornumber.style.display = "none";


  inputContainer.style.display = "block";
  outputContainer.style.display = "block";
  qualityContainer.style.display = "block";

  resetValues();
  numberOfApartments.addEventListener("input", calcRes);
  numberOfFloors.addEventListener("input", calcRes);
});

// Commercial Button
commercialButton.addEventListener("click", () => {
  floorNumber.style.display = "block";
  apartmentnumber.style.display = "none";
  maximumOccupancy.style.display = "block";
  elevatornumber.style.display = "none";

  inputContainer.style.display = "block";
  outputContainer.style.display = "block";
  qualityContainer.style.display = "block";

  resetValues();
  numberOfFloors.addEventListener("input", calcCom);
  maxOccupancyOfEachFloor.addEventListener("input", calcCom);
});

// Industrial Button
industrialButton.addEventListener("click", () => {
  floorNumber.style.display = "none";
  apartmentnumber.style.display = "none";
  maximumOccupancy.style.display = "none";
 elevatornumber.style.display = "block";

  inputContainer.style.display = "block";
  outputContainer.style.display = "block";
  qualityContainer.style.display = "block";

  resetValues();
  numberOfElevators.addEventListener("input", calcInd);
});

//Let means it can change
//Let has 3 Purposes 
// 1. get elements by id's
// 2. To dispplay information to user
// 3. To do calculations
//'let' in this case displays information to user. Also maintains accurate calcualtions while adding currency format. 
let pricePerIndividualElevator = 0

// Radio Button Event Listeners

// Standard Button
standardButton.addEventListener("click", () => {
  unitPriceOutput.value = 8000;
  installFeeOutput.value = 1.1;
  finalcost();  
 });

 function standardButtonPressed() {
  // Create a formatter for US dollar currency
  const dollarUSLocale = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  // Format the price
  const formattedPrice = dollarUSLocale.format(8000);

  // Set the formatted price as the value of the input element
  document.getElementById('summaryPriceofEachElevator').value = formattedPrice;
}

// Premium Button
premiumButton.addEventListener("click", () => {
  unitPriceOutput.value = 12000;
  installFeeOutput.value = 1.15;
  finalcost();
});

// Excelium Button
exceliumButton.addEventListener("click", () => {
  unitPriceOutput.value = 15000;
  installFeeOutput.value = 1.2;
  finalcost();
});


// Function to calculate the final cost
function finalcost() {
  const finalCost = Number(elevatorOutput.value) * Number(unitPriceOutput.value) + Number(installFeeOutput.value);
  
}

// Functions for calculations and updates
function updatefinalCost() {
  if (elevatorOutput.value && unitPriceOutput.value && installFeeOutput.value) {
    finalcost();
  }
}


// Function to reset form values
function resetValues() {
  numberOfFloors.value = "";
  numberOfApartments.value = "";
  maxOccupancyOfEachFloor.value = "";
  numberOfElevators.value = "";
  elevatorOutput.value = "";
  unitPriceOutput.value = "";
  installFeeOutput.value = "";
  finalCostOutput.value = "";
}

// Function to toggle button displays
function selectButton(selectedId) {
  const allButtons = ['residential', 'commercial', 'industrial'];
  allButtons.forEach(function(btnId) {
    const button = document.getElementById(btnId);
    if (btnId !== selectedId) {
      button.style.display = 'none';
    } else {
      button.style.display = 'inline-block';
    }
  });
}

// Function to toggle button displays for quality types
function selectButton2(selectedId) {
  const allButtons = ['standard', 'premium', 'excelium'];
  allButtons.forEach(function(btnId) {
    const button = document.getElementById(btnId);
    if (btnId !== selectedId) {
      button.style.display = 'none';
    } else {
      button.style.display = 'inline-block';
    }
  });
}

