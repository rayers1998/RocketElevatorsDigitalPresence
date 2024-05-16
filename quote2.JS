// JavaScript for Dynamic Form Updates

document.addEventListener('DOMContentLoaded', function () {
    // Initialize event listeners for product line selection
    const productLineSelector = document.getElementById('product-line-selector');
    if (productLineSelector) {
        productLineSelector.addEventListener('change', updateProductLinePrice);
    }

    // Event listeners for input changes that affect costs
    const numberOfElevatorsInput = document.getElementById('number-of-elevators');
    const elevatorCostInput = document.getElementById('elevator-unit-price input');
    const installationFeesInput = document.getElementById('installation-fees input');

    if (numberOfElevatorsInput) {
        numberOfElevatorsInput.addEventListener('input', function () {
            updateElevatorCost(this.value);
        });
    }

    if (elevatorCostInput && installationFeesInput) {
        elevatorCostInput.addEventListener('change', updateInstallationFees);
        installationFeesInput.addEventListener('change', updateTotalCost);
    }

    // Function to update product line price
    function updateProductLinePrice() {
        const selectedLine = productLineSelector.value;
        // Placeholder for product line price calculation
        const price = getProductLinePrice(selectedLine); // Define this function based on your business logic
        document.getElementById('elevator-unit-price input').value = price;
    }

    // Function to update elevator cost
    function updateElevatorCost(numberOfElevators) {
        // Placeholder for cost calculation
        const unitPrice = parseFloat(elevatorCostInput.value);
        const totalElevatorCost = numberOfElevators * unitPrice;
        document.getElementById('elevator-total-price input').value = totalElevatorCost.toFixed(2);
        updateInstallationFees();
    }

    // Function to update installation fees
    function updateInstallationFees() {
        const elevatorCost = parseFloat(document.getElementById('elevator-total-price input').value);
        const installationFeePercentage = 0.10; // Example percentage
        const installationFee = elevatorCost * installationFeePercentage;
        document.getElementById('installation-fees input').value = installationFee.toFixed(2);
        updateTotalCost();
    }

    // Function to update total cost
    function updateTotalCost() {
        const elevatorCost = parseFloat(document.getElementById('elevator-total-price input').value);
        const installationFees = parseFloat(document.getElementById('installation-fees input').value);
        const totalCost = elevatorCost + installationFees;
        document.getElementById('final-price input').value = totalCost.toFixed(2);
    }
});

// Additional utility functions as needed
function getProductLinePrice(line) {
    // Replace this with actual logic or API call to fetch prices based on the product line
    switch(line) {
        case 'standard':
            return 5000;
        case 'premium':
            return 10000;
        case 'excelium':
            return 15000;
        default:
            return 0;
    }
}
