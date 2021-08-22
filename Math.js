// const myNumber = -5;
// const output = Math.abs(myNumber)

const myNumber = 6.6398;
// const output = Math.ceil(myNumber) // output: 7
// const output = Math.floor(myNumber) // output: 6
// const output = Math.round(myNumber)

// const output = Math.random();
let output = Math.random() * 10;
output = Math.random() * 6;
const rounded = Math.floor(output)

console.log(rounded)
// console.log(output)

for (let i = 0; i <= 20; i++) {
    const output = Math.random() * 6;
    const rounded = Math.round(output)
    console.log(rounded)
}