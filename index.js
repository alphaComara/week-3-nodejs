const sayYo = require('./custom.js');

//engineSize attribute and value
let smallCar = {
engineSize : 8
};

let rating = 0;

//provide a rating of 5 for engine size 8

switch (smallCar.engineSize) {
    case 1:
    case 2:   
    case 3:
    case 4:
    
    rating=7;
    break;
    case 8:
        rating=3;
    default:
        break;
}

console. log({rating});

sayYo()
