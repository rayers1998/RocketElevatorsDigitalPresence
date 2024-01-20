
// TEST 1 
// Complete the function by returning the first element 
// of the array 
// *NOTE* use the 'arr' parameter
function first(arr){
    // your code here
    return arr[0];      
}


// TEST 2 
// Complete the function by returning the length
// of the array
function howMany(arr){
    // your code here
    return arr.length;      
}


// TEST 3

// Complete the function by returning the last
// element of the array
// *HINT* use the length property
function last(arr){
    // your code here
 return arr[arr.length - 1];   
}


// TEST 4
// Use a FOR LOOP to complete the function
// return the sum of an array of numbers (all numbers added to together)
function forLoopSum(arr){
    // your code here
    let sum = 0;
    for (let i = 0; i < arr.length; i++){ sum += arr[i];}
    {
    return sum;
    }
}

// TEST 5
// use a FOR LOOP to to complete the function
// return the highest number from an array
function forLoopHighest(arr){
    // your code here
    let highest = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > highest){
            highest = arr[i];
        }
    }
    return highest;    
}


// TEST 6
// use a FOREACH LOOP to complete the function
// return the sum of an array of numbers
function forEachLoopSum(arr){
    // your code here
    let sum = 0;
    arr.forEach(function(num){sum += num;});
    return sum;    
}



// TEST 7
// use a FOREACH LOOP to to complete the function
// return the highest number from an array
function forEachLoopHighest(arr){
    // your code here
    let highest = arr[0];
    arr.forEach(function(num){
    if(num > highest) {
        highest = num;
    }
    });
    return highest;
}



// TEST 8
// use a WHILE LOOP to complete the function
// return the sum of all numbers in the array
function whileLoopSum(arr) {
    // your code here
    let sum = 0;
    let index = 0;
    while(index < arr.length){
        sum += arr[index];
        index++;
    }
    return sum;
}



// TEST 9
// use a WHILE LOOP to to complete the function
// return the highest number from an array
function whileLoopHighest(arr){
    // your code here
    let highest = arr[0];
    let index = 1;
    while(index < arr.length){
        if(arr[index] > highest){highest = arr[index];}
index++;}
return highest;
    } 


module.exports = {first, howMany, last, forLoopSum, forLoopHighest, forEachLoopSum, forEachLoopHighest, whileLoopSum, whileLoopHighest}
