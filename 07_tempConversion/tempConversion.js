const convertToCelsius = function(fahrenheit) {
  let inCelsius = (fahrenheit - 32) / 1.8
  inCelsius = Math.round(inCelsius*10) / 10
  return inCelsius
};

const convertToFahrenheit = function(celsius) {
  let inFahrenheit = celsius * 1.8 + 32
  inFahrenheit = Math.round(inFahrenheit*10) / 10
  return inFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
