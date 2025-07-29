// Task 1: Temperature Conversion
// TODO: Convert Celsius to Fahrenheit

let temperatureCelsius = 25;

let temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

let temperatureFahrenheitToCelsius = (temperatureFahrenheit - 32) * 5/9;



console.log("Temperature conversion:" ,temperatureCelsius + " °C = " + temperatureFahrenheit + " °F"); 
console.log("Temperature conversion reversed:", temperatureFahrenheit + " °F = " + temperatureFahrenheitToCelsius + " °C");


// BONUS CHALLENGES
// 1. Add reverse conversions (Fahrenheit to Celsius, etc.)


// Task 2: Distance Conversion

// BONUS CHALLENGES
// 2. Format numbers to 2 decimal places

// TODO: Convert miles to kilometers
let distanceMiles = 5;
let distanceKilometers = distanceMiles * 1.60934;

console.log(
  "Distance conversion:",
  distanceMiles.toFixed(2), "miles =",
  distanceKilometers.toFixed(2), "kilometers"
);


// Task 3: Currency Conversion
// TODO: Convert USD to EUR
// Use fixed rate: 1 USD = 0.92 EUR
// BONUS CHALLENGES
// 3. Create a function for each conversion
let amountUSD = 100;
let FixedRate = 0.92;
let amountEUR = amountUSD * FixedRate;
// Your code here

// Display the result
console.log("Currency conversion:", "$", amountUSD, "=", "€", amountEUR,"EUR");

