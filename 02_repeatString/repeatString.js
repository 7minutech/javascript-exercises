const repeatString = function(message, repeat_num) {
    //concates the same message repeat_num amount of times with itself
    let repeatMessage = message
    const blankMessage = ""
    const errorMessage = "ERROR" 
    if (repeat_num > 0){
        for (let i = 0; i<repeat_num-1; i++){
            repeatMessage += message;
        }  
        return repeatMessage
    }
    //return blank message when number of repeats is 0
    else if (repeat_num == 0){
        return blankMessage
    }
    //return error message if number of repeats is negative
    else{
        return errorMessage
    }
};

// Do not edit below this line
module.exports = repeatString;
