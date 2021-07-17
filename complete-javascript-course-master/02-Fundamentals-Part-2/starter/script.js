'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (pastTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive")


function logger() {
    console.log("Hello");
}

logger();
*/

/*
Below is code for assignments for this section
*/

//Lecture 33: Functions

function describeCountry(country, population, capitolCity) {
    return `${country} has ${population} people and its capitol city is ${capitolCity}.`
}

console.log(describeCountry('Canada', 50000000, 'Ottawa'))
console.log(describeCountry('USA', 55000000, 'DC'))
console.log(describeCountry('Finland', 6000000, 'Helsinki'))

//Lecture 34: Function Declorations vs Expressions

function percentageOfWorld1(population) {
    return 100 * (population / 8000000000) //assuming population of world to be ~ 8billion
}

console.log(percentageOfWorld1(22441000))
console.log(percentageOfWorld1(4410000))
console.log(percentageOfWorld1(14410000))

const percentageOfWorld2 = function (population) {
    return 100 * (population / 8000000000)
}

console.log(percentageOfWorld2(22441000))
console.log(percentageOfWorld2(4410000))
console.log(percentageOfWorld2(14410000))

//Lecture 35: Arrow Functions

const percentageOfWorld3 = population => 100 * (population / 8000000000);

console.log(percentageOfWorld3(22441000))
console.log(percentageOfWorld3(4410000))
console.log(percentageOfWorld3(14410000))

//Lecture 36: Functions Calling Other Functions 

const describePopulation = (country, population) => `${country} has ${population} people, which is ${percentageOfWorld3(population)}% of the world`

console.log(describePopulation('China', 1441000000))

//Lecture 39: Introduction to Arrays

const populations = [2200000000, 550000000, 1441000000, 20000]

console.log(populations.length === 4);

let percentages = []

for (let i = 0; i < populations.length; i++) {
    percentages[i] = percentageOfWorld1(populations[i]);
}

console.log(percentages)

//Lecture 40: Basic Array Operations

const neighbours = ['Canada', 'Mexico']

neighbours.push('Utopia')
neighbours.pop()

if (neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

const toChange = neighbours.indexOf('Mexico')

neighbours[toChange] = 'Republic of Mexico'

console.log(neighbours);

//Lecture 42: Introduction to Objects

const myCountry = {
    country: "Canada",
    capital: "Ottawa",
    langauge: ['English', 'French'],
    population: 60000000,
    neighbours: ['USA'],
    describe: function () {
        console.log(`${this.country} has ${this.population} ${this.langauge[0]} speakers, ${this.neighbours.length} neighbour and a capital city called ${this.capital}`);
    },
    checkIsland: function () {
        if (this.neighbours.length === 0) {
            return this.isIsland = true;
        }
        else {
            return this.isIsland = false;
        }
    }
};

myCountry.describe();
console.log(myCountry.checkIsland());
console.log(myCountry)

//Lecture 43: Dot vs Bracket Notation 

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.langauge[0]} speakers, ${myCountry.neighbours.length} neighbour and a capital city called ${myCountry.capital}`);

myCountry.population += 2000000;

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.langauge[0]} speakers, ${myCountry.neighbours.length} neighbour and a capital city called ${myCountry.capital}`);

myCountry['population'] -= 2000000;

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.langauge[0]} speakers, ${myCountry.neighbours.length} neighbour and a capital city called ${myCountry.capital}`);

//Lecture # 46: Iteration: The for Loop

/*
for (let i = 1; i <= 50; i++) {
    console.log(`Voter ${i} is currently voting`)
}
*/

//Lecture # 48: Looping Backwards, and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(listOfNeighbours[i][j])
    }
}

// Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let koalaScore = calcAverage(65, 54, 49)
let dolphinScore = calcAverage(44, 23, 71)

console.log(koalaScore)

const checkWinner = (avgDolphins, avgKoalas) => {
    avgDolphins > avgKoalas ? console.log(`Dolphins win (${avgDolphins}, ${avgKoalas})`) : console.log(`Dolphins win (${avgKoalas}, ${avgDolphins})`)
}

checkWinner(dolphinScore, koalaScore);

// Coding Challenge #2

const calcTip = billValue => {
    const tip = billValue > 50 && billValue < 300 ? 0.15 : 0.2;
    return billValue + billValue * tip
}

const bills = [125, 555, 44]

for (let i = 0; i < 3; i++) {
    bills[i] = calcTip(bills[i]);
}

console.log(bills)

// Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height)
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height)
        return this.BMI;
    }
};

john.calcBMI() > mark.calcBMI() ? console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is greater than ${mark.fullName}'s ${mark.calcBMI()}`) : console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is greater than ${john.fullName}'s ${john.calcBMI()}`)

// Coding Challenge # 4

const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let totals = []

for (let i = 0; i < newBills.length; i++) {
    totals[i] = calcTip(newBills[i])
}

console.log(totals);

//BONUS

let sum = 0;
let newTotal = 0;

const calcAverages = arr => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    newTotal = sum / arr.length;
    return newTotal;
}

console.log(calcAverages(totals));