// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

const func = x => {
    return x;
};

console.log("hi");

// Coding Challenge # 1

const data1 = [17, 21, 23];

const printForecast = temps => {
    let output = ``;
    for (let i = 0; i < temps.length; i++) {
         output += `${temps[i]}\u00B0 C in ${i} days ... `;
    }
    return output;
}

console.log(printForecast(data1));