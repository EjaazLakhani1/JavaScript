/*
let js = 'amazing'
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstanme = "Jonas";

console.log(firstanme);
console.log(firstanme);
console.log(firstanme);

let jonas_matilda = "JM";

let PI = 3.1415

let myFirstJob = "Intern"
let myCurrentJob = "Intern"


let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = 'yes'
console.log(typeof javascriptIsFun)

let year
console.log(typeof year)

year = 1998
console.log(typeof year)

console.log(typeof null)


let age = 23;
age = 24;

const birthYear = 1998;
//birthYear = 2000; 


const ageJonas = 2037 - 1998;
const ageSarah = 2


const firstname = 'Ejaaz'
const lastname = "Lakhani"

const greetng = "Hello my name is " + firstname + " " + lastname;
console.log(greetng);

const newGreeting = `Hello my name is ${firstname} ${lastname}`
console.log(newGreeting);


const inputYear = '1991'
console.log(inputYear + 18); //will output 199118
console.log(Number(inputYear) + 18); //will output 2009

console.log(Number('Ejaaz')) //output NaN
*/






/*
Below is code for assignments for this section
*/

//Lecture 10: Values and Variables
const country = 'Canada';
const continent = 'North America';
let population = 10000;

console.log(country);
console.log(continent);
console.log(population);

//Lecture 12: Data Types
const isIsland = false;
let language

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

//Lecture 13: let, const and var
language = "english"

//Lecture 14: Basic Operators
const halfPopulation = population / 2;
console.log(population++);
console.log(population > 6000000);
const average = 33000000
console.log(population > average);
const description = 'Portugal is in Europe, and its 11 million people speak portuguese'

//Lecture 18: Taking Decisions: ff / else Statements 

if (population > average) {
    console.log(`${country}'s population is above average`)
}
else {
    console.log(`${country}'s population is ${average - population} below avergae.`)
}

//Lecture #20: Type Conversion and Coersion

console.log('9' - '5'); //output = 4
console.log('19' - '13' + '17') //output = 617
console.log('19' - '13' + 17) //output = 23
console.log('123' < 57) //output = false
console.log(5 + 6 + '4' + 9 - 4 - 2) //output = 1143

//Lecture 22: Equality operators "===" vs "=="

/*
let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

if (numNeighbours === 1) {
    console.log('Only 1 border!')
}
else if (numNeighbours > 1) {
    console.log('More than 1 border')
}
else {
    console.log('No Neighbous')
}
*/

//Lecture 24: Logical Operators 

const populationLess = population < 50000000
const speaksEnglish = language === "english"

if (populationLess && speaksEnglish && !isIsland) {
    console.log(`You should live in ${country}`)
}
else {
    console.log(`${country} might not be best choice`)
}

//Lecture 26: The switch Statement

switch (language) {

    case 'Chinese':
    case 'Mandarin':
        console.log("MOST number of native speakers!")
        break;
    case 'spanish':
        console.log("2nd place in number of native speakers")
        break;
    case 'english':
        console.log("3rd place")
        break;
    case 'hindi':
        console.log("4th place")
        break;
    case 'arabic':
        console.log("5th most spoken language")
        break;
    default:
        console.log('Great language too :D')
        break;
}

//Lecture 28: The Conditional (Ternary) Operator

population > 33000000 ? console.log(`${country} population is greater then 33million`) : console.log(`${country} population is not greater then 33million`)

//Coding Challenge #1

let markHeight = 1.7
let johnHeight = 1.65

let markWeight = 70
let johnWeight = 80

markBMI = markWeight / (markHeight ** 2)
johnBMI = johnWeight / (johnHeight ** 2)

markHigherBMI = markBMI > johnBMI;

//Coding Challenge #2

markBMI > johnBMI ? console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI} `) : console.log(`John's BMI is higher than Mark's BMI`)

// Coding Challenge #3

let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 91 + 110) / 3;

if (koalasScore > dolphinsScore && koalasScore > 100) {
    console.log(`Koala's win!`)
}
else if (dolphinsScore > koalasScore && dolphinsScore > 100) {
    console.log(`Dolphin's win!`)
}
else if (koalasScore < 100 && dolphinsScore < 100) {
    console.log(`Scores too low, no team wins`)
}
else {
    console.log(`TIE`)
}

// Coding Challenge #4

const billValue = 430;
let tip;
billValue > 50 || billValue < 300 ? tip = 0.15 : tip = 0.2;

const tipValue = billValue * tip

console.log(`The bill was ${billValue} and the tip was ${tip}. The total is ${Number(billValue + tipValue)}`)