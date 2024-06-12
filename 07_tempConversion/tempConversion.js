const convertToCelsius = function(temperature) {
    //fahrenheit to celsius
    //move 1 decimal over before rounding for 1 decimal of precision 
    return Math.round((temperature - 32) * 5/9 * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  //celsius to fahrenheit
  //move 1 decimal over before rounding for 1 decimal of precision 
  return Math.round((temperature * 9/5 + 32) * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
