const number = -50;
const abs = Math.abs(number)
// console.log(abs)

// ceil 

const number2 = 6.3;
const ceilNumber = Math.ceil(number2)
// console.log(ceilNumber) // output: 7

// floor 

const number3 = 5.999;
const floorNumber = Math.floor(number3)
// console.log(floorNumber) //output: 5

// round 
const number4 = 5.5; //6
const number5 = 5.9; //6
const number6 = 5.4; //5
const number7 = 5.1; // 5
// const roundNumber = Math.round(number6)
// console.log(roundNumber)




// random: 

const randomNumber = Math.random()
// console.log(randomNumber)

// under 6
// const randomNumber6 = Math.random() * 6;
// const roundNumber = Math.round(randomNumber6)
// console.log(roundNumber)

for (i = 0; i <= 20; i++) {
    const randomNumber6 = Math.random() * 6;
    const roundNumber = Math.round(randomNumber6)
    console.log(roundNumber)
}