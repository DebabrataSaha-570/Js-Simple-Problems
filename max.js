const business = 450;
const minister = 5550;
const army = 600;

// compare two 

// if (business > minister) {
//     console.log('business person er pola is bigger')

// }

// else {
//     console.log('minister er pola is bigger')
// }

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second
    }
}

const larger = findLargest(345, 241)
console.log(larger)

// compare three 

/* if (business > minister && business > army) {
    console.log('business is bigger')

}
else if (minister > business && minister > army) {
    console.log('minister is bigger')
}
else {
    console.log('army is bigger')
}
*/

var max = Math.max(business, minister, army)
console.log('largest is', max)


// task 1: create a function that takes three numbers as input parameter and return you the largest number of three

// task 2 : write a function to find the smallest of three numbers. 


