
const removeFromArray = function(arr,...targets) {
    const newArr = [];
    //if element is in targets skip if not add to newArr
    for(let element of arr){
        if(targets.includes(element)){
            continue
        }
        else{
            newArr.push(element)
        }
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
