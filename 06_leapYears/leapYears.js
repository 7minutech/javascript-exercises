const leapYears = function(year) {
    //if year is divisible by 4 then it is a leap year
    //if year is divisible by 100 then it is not a leap year
    //unless year is also divisible by 400
    if(year >= 100){
        if(year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)){
            return true;
        }
        else{
            return false;
        }
    }

};

// Do not edit below this line
module.exports = leapYears;
