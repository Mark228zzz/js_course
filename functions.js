
// // 1 functions

// //function declatation
// function getName1(name){
//     console.log('function 1: ' + name)
// }

// // function expression
// const getName2 = function getName2(name){
//     console.log('function 2: ' + name)
// }

// getName1('Mark')
// getName2('Mark')

// console.log(typeof getName1) // type function
// console.log(typeof getName2) // type function


// // 2 function anonimus

// let count1 = 0
// const int1 = setInterval( function() {
//     if(count1 === 100) { // 100 times
//         clearInterval(int1)
//     } else {
//         console.log(++count2)
//     }
// }, 100) // 100ms

// let count2 = 0
// const int2 = setInterval( function() {
//     if(count2 === -1) { // infinity
//         clearInterval(int2)
//     } else {
//         console.log(++count1)
//     }
// }, 100) // 100ms


// // 3 arrow functions 

// const getName1 = function getName1(name){
//     console.log('function getName 1: ' + name)
// }

// const getNameArrow = (name) => {
//     console.log('function Arrow: ' + name)
// }

// const getNameArrow2 = (name, age) => console.log('function Arrow 2: ' + name + ' Age ' + age)
// const getNameArrow3 = int => int * 10

// getName1('Mazur') //             Mazur
// getNameArrow('Mark')//            Mark
// getNameArrow2('Mark', 99) //      Mark
// console.log(getNameArrow3(10)) // 100

// const calculate = (x, z = 5) => z * x // z = 5 - default

// console.log(calculate(10)) // 50
// console.log(calculate(10, 8))// 80, z = 5 --> z = 8 - default 

const calculate1 = (...all) => console.log(all)
const calculate = (...all) => all.reduce((sum, a) => sum + a, 0)

calculate1(1, 2, 3, 4, 5, 6) // calculate(1, 2...6) - Array(6)
console.log(calculate(1, 2, 3, 4, 5, 6)) // 21

function calculate2(...data) {
    return data.reduce((b, a) => b + a, 0)
}

console.log(calculate2(1, 2, 3, 4, 5, 6)) // 21