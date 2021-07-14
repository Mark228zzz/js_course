// 1 variables

// const firstName = '"Sasha"'
// const lastName = 'San'
// let age = 35
// const isValid = false
// const isNoValid = true
// const _name = 'Mark'
// const $ = 250

// age = '37'

// console.log(age)
// console.log(isValid)
// console.log(isNoValid)

// 2 operators

// const flash = prompt('Input your name?')
// alert('My name: ' + firstName)

// console.log('my name is: ' + firstName + ' age: ' + age)
// console.log(age)

// const y = 5
// const z = 15

// console.log(y - z)
// console.log(y + z)
// console.log(y / z)
// console.log(y * z)

// let x, y, z, oper

// x = prompt('Type first numver')
// y = prompt('Type second numver')
// oper = prompt('Type an operator')

// if(oper=='+'){
//     z = Number(x) + Number(y)
// }

// if(oper=='-'){
//     z = Number(x) - Number(y)
// }

// if(oper=='/'){
//     z = Number(x) / Number(y)
// }

// if(oper=='*'){
//     z = Number(x) * Number(y)
// }

// alert('Your number is: ' + z)

// let x = 6
// let y = 3

// console.log(x += y)

// x = 6
// y = 3

// console.log(x -= y)

// x = 6
// y = 3

// console.log(x *= y)

// x = 6
// y = 3

// console.log(x /= y)

// 3 data types 

// const boolean = true
// const string = 'Sasha'
// const number = 35
// let p
// let a = null
// const array = []
// const obj = {}
// const bigInt = 12341312313132141241244141341324152535n

// console.log(typeof boolean)
// console.log(typeof string)
// console.log(typeof number)
// console.log(typeof p)
// console.log(typeof a)
// console.log(typeof array)
// console.log(typeof obj)
// console.log( bigInt)

// console.log(1 === '1')
// console.log(1 == '1')
// console.log(1 === 1)

// console.log(1 != 3)
// console.log(1 != '3')
// console.log(1 != '1')
// console.log(1 !== 3)

// const color = 'red' // red black green

// if (color === 'red') {
//     console.log('color red')
// } else if (color === 'black') {
//     console.log('color black')
// } else {
//     console.log('color empty')
// }

// x = prompt('Type first numver')
// y = prompt('Type second numver')
// oper = prompt('Type an operator')

// if(oper=='') {
//     z = 'Error 3'
// } else if (x == '') {
//     z = 'Error 1'
// } else if (y == '') {
//     z = 'Error 2'
// } else if(oper=='-') {
//     z = Number(x) - Number(y)
// } else if(oper=='/') {
//     z = Number(x) / Number(y)
// } else if(oper=='*') {
//     z = Number(x) * Number(y)
// } else if (oper == '+') {
//     z = Number(x) + Number(y)
// }

// alert('Your number is: ' + z)

// const isReady = true // true or false

// if(isReady) {
//     console.log('ok')
// } else {
//     console.log('error')
// }

// isReady ? console.log('ok') : console.log('error')


// functions

// const number = 100

// function calculate1(myAge){
//     return number - myAge
// }
// function calculate2(sisterAge){
//     return number - sisterAge
// }

// // const result1 = calculate1(35)
// // const result2 = calculate2(40)
// // console.log(result1)
// // console.log(result2)

// console.log(calculate1(-10)) // 110
// console.log(calculate1(40)) // 60
// console.log(calculate1(0)) // 100

// console.log(calculate1(-10) + calculate2(-20)) // 230
// console.log(calculate1(40) + calculate2(70)) // 90
// console.log(calculate1(0) + calculate2(0)) // 200
// console.log(calculate1(0) + calculate2(-3)) // 203
// console.log(calculate1(0) + calculate2(8)) // 192
// console.log(calculate1(0) / calculate2(0)) // 1


const number = 1000

function calculateAge(myAge){
    return number - myAge
}
function fullName(firstName , lastName){
    return '.My full name is ' + firstName + lastName
}

function info(firstName, lastName){
    const age = calculateAge(35)
    if (age < 0) {
        console.log('age cant be less then zerro')
    } else if (age > 90) {
        console.log('yor older man')
    }
    const name = fullName(firstName, lastName)
    console.log('My age: ' + age + name)
}

info('Mark', ' Mazur')
info('Masha', ' red')
info('dasha', ' green')