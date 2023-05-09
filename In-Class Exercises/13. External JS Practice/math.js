// Return a random integer between min and max, inclusive
function getRandomInt(min, max){
    max -= min;
    max += 1;
    var randInt = Math.floor(Math.random() * max) + min;
    return randInt
}

// Take the input numToRound, and round it to numDecimal
// places, and return the rounded result
function roundNumber(numToRound, numDecimal){
    var outputNum = Math.round(numToRound * Math.pow(10, numDecimal));
    outputNum = outputNum / Math.pow(10, numDecimal);
    return outputNum
}

// Take the input temperature in degrees Celsius, convert it
// to degrees Fahrenheit, and return that value
function getDegF(degC){
    var output = degC * 1.8 + 32;
    return output
}

// Take the input temperature in degrees Fahrenheit, convert
// it to degrees Celsius, and return that value
function getDegC(degF){
    var output = degF - 32;
    output = output * (5 / 9);
    return output
}

// Find the area of a circle with a radius of circleRadius
// Return the answer rounded to numDecimal places
function getAreaCircle(circleRadius, numDecimal){
    var output = Math.pow(circleRadius, 2) * Math.PI;
    output = Math.round(output * Math.pow(10, numDecimal));
    output = output / Math.pow(10, numDecimal);
    return output
}