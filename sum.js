// const numbers = [44, 23, 43, 53, 3, 56];

// var sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     var element = numbers[i];
//     sum = sum + element
//     // console.log(sum)
// }






// using a function 



function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;

    }
    return sum;
}

const total = arrayTotal([32, 44, 67])
console.log(total)