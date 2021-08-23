// largest element of an array 
function findLargestElement(numbers) {
    // var largest = 0;
    var largest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

var numberArray = [12, 34, 54, 54, 65] // output: 65; 

var numberArray = [-5, -1.2, -3.4, -.5] // output: -0.5; 

// console.log(findLargestElement(numberArray))


// smallest element of an array 

function findTheSmallestElement(numbers) {
    var smallest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element < smallest) {
            smallest = element
        }
    }
    return smallest;
}

var numberArray2 = [12, 34, 54, 54, 65] // output: 12; 

var numberArray3 = [-5, -1.2, -3.4, -.5] // output: -5 ; 

console.log(findTheSmallestElement(numberArray3))