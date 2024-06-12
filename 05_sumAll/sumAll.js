const sumAll = function(lower_bound,upper_bound) {
    let sum = 0;
    let temp = 0;
    //swap bounds if lower bound is larger than higher bound
    if (lower_bound>upper_bound){
        upper_bound = temp
        upper_bound = lower_bound
        lower_bound = temp
    }
    // if lower bound or upper bound are negative or not a number return error
    if(lower_bound < 0 || upper_bound < 0 || !(Number.isInteger(lower_bound)) || !(Number.isInteger(upper_bound))){
        return "ERROR"
    }

    //sum lower bound to upper bound inclusive
    for(let i = lower_bound; i<=upper_bound;i++){
        sum+=i
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
