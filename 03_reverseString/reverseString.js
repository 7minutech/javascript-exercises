const reverseString = function(word) {
    let wordArr = []
    //start at 1 and make it negative for last letter in string
    for(let i = 1; i<=word.length;i++){
        wordArr.push(word.at(-i))
    }
    return wordArr.join("")
};

// Do not edit below this line
module.exports = reverseString;
