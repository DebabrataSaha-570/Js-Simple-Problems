function largestElement(numbers) {
    // let largest = 0;
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}

const ages = [12, 54, 74, 78, 88, 89, 98, 102];
const oldest = largestElement(ages);
const oldest2 = largestElement([-2, -6, -1, -4.5])
console.log(oldest2)


// task: find the lowest element of an array 

