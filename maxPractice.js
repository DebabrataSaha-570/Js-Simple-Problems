// var police = 250;
// var army = 300;

// // finding the largest number of two with condition 

// if (police > army) {
//     console.log('police is bigger')
// }
// else {
//     console.log('army is bigger')
// }

// // same condition under a function 
// function largerNumber(num1, num2) {
//     if (num1 > num2) {
//         return (num1)
//     }
//     else {
//         return (num2)
//     }
// }

// console.log(largerNumber(police, army))

// // ...................Math max 

// var largerOfTwo = Math.max(police, army)
// console.log(largerOfTwo)


// var kobutor = 3;
// var murgi = 4;
// var hash = 5;

// // finding the largest number of three with condition 

// if (kobutor > murgi && kobutor > hash) {
//     console.log('kobutor besi dim dey. ')
// }
// else if (murgi > kobutor && murgi > hash) {
//     console.log('murgi besi dim dey')
// }
// else {
//     console.log('hash besi dim dey')
// }

// // same condition with function 
// function KeBesiDimDey(madam1, madam2, madam3) {
//     if (madam1 > madam2 && madam1 > madam3) {
//         return madam1
//     }
//     else if (madam2 > madam1 && madam2 > madam3) {
//         return madam2
//     }
//     else {
//         return madam3
//     }
// }

// console.log(KeBesiDimDey(kobutor, murgi, hash))


// // .....................Math.max 
// var largerOfThree = Math.max(kobutor, murgi, hash)
// console.log(largerOfThree)



var number1 = 39;
var number2 = 50;
var number3 = 12;

function smallestNumberOfThree(element1, element2, element3) {
    if (element1 < element2 && element1 < element3) {
        return element1;
    }
    else if (element2 < element1 && element2 < element3) {
        return element2;
    }
    else {
        return element3
    }
}
console.log(smallestNumberOfThree(number1, number2, number3))

// ...................... using math.min  
var smallestNumber = Math.min(number1, number2, number3)
console.log(smallestNumber)
