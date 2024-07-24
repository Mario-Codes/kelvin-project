// this is the temperature of Kelvin
let kelvin = 293;

// kelvin subtracted by 273 to equal celsius.
var celsius = kelvin - 273;

// this is the coversion of celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;

// this is the coversion of celsius to Newton
var Newton = celsius * (33/100);

// using the math.floor() mehthod the object rounds down the decimal, in this case its fahrenheit. 
fahrenheit = Math.floor(fahrenheit);

// using the math.floor() mehthod the object rounds down the decimal, in this case its Newton. 
Newton = Math.floor(Newton);


console.log(`The Temperature is ${fahrenheit} degrees Fahrenheit.` );

console.log(`The Temperature is ${Newton} degrees in Newton Scale.` );
