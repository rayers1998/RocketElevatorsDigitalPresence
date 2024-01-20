
// #1 use an if-statement to complete the function
// *NOTE* make sure to use return statements
// write an if statements that returns 'beer' if age is
// 21 or greater; otherwise, returns 'juice'
// *NOTE* some of the code is written for you
function canDrink(age){
    // your code here
    if (age >= 21) {
        return 'beer';       
    } else {
        return 'juice';    
    }
}

// #2 use an if statement to complete the function
// return 'can vote' if age is 18 or greater,
// otherwise return 'can't vote'
function canVote(age){
    //your code here
    if (age >=18) {
            return 'can vote';
    }   else {    
         return 'can not vote';
}

// #3 complete the function using an if/ else-if statement 
// if the age is less than 15 return 'no driving'
// if the age is 15 return 'learners permit'
// if the age is 16 or 17 return 'can drive during day'
// if the age is 18 or older return 'can drive anytime'
function canDrive(age){
    // your code here
    if (age < 15) {
        return 'no driving';
    } else if (age === 15) {
        return 'learners permit';
    } else if (age >=16 && age <=17)  {
        return 'can drive during day';
    } else {
        return 'can drive anytime'
    }
}    
       
   
}

// #4 complete the function using an if statement
// return 'weekday' if day is equal to 'Monday', 'Tuesday', 'Wednesday' or 'Thursday'
// return 'almost weekend' if day is equal to 'Friday'
// and return 'weekend' if day is equal to 'Saturday' or 'Sunday'
function week(day){
    // your code here
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday') {
        return 'weekday';
    } else if (day === 'Friday') {
        return 'almost weekend';
    } else {
        return 'weekend';
    }   
   
   
   
   
   
}





module.exports = {canDrink, canVote, canDrive, week}