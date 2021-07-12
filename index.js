// 1 variables

const firstName = '"Sasha"'
const lastName = 'San'
let age = 35
const isValid = false
const isNoValid = true
const _name = 'Mark'
const $ = 250

age = '37'

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

let x, y, z, oper

x = prompt('Type first numver')
y = prompt('Type second numver')
oper = prompt('Type an operator')

if(oper=='+'){
    z = Number(x) + Number(y)
}

if(oper=='-'){
    z = Number(x) - Number(y)
}

if(oper=='/'){
    z = Number(x) / Number(y)
}

if(oper=='*'){
    z = Number(x) * Number(y)
}

alert('Your number is: ' + z)

let h = 6

console.lag(x++)
console.lag(x)