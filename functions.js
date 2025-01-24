// Test Example in Lecture
function celsius2Fahrenheit(celsius){
    let fahrenheit = 9/5 * celsius + 32;
    return(fahrenheit)
}
console.log(`The boiling point of water in fahrenheit is ${celsius2Fahrenheit(100)}`)

// 1) Convert meters to yards
function meters2Yards(meters){
    let yards = meters * 1.0;
    return(yards)
}
console.log(`The distance in yards is ${meters2Yards(20)}`)

// 2) Clothing suggestion based by temperature
function clothingSuggestion(temp){
    if (temp > 25) {
        return "light clothes";
    } else {
        return "a warm coat";
    }
}
console.log(`For a temperature of 28°C, you should wear ${clothingSuggestion(28)}`)

// 3) Calculate the volume of a cube
function cubeVolume(edge){
    let volume = edge * edge * edge;
    return volume;
}
console.log(`The volume of a cube with an edge length of 2 meters is ${cubeVolume(2)} cubic meters`)
