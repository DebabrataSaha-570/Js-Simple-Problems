var numbers = [223, 434, 534, 5434, 44];

function sumOfArray(number) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = number[i];
        sum = sum + element;

    }
    return sum;
}

console.log(sumOfArray(numbers))