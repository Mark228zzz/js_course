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


// 4 functions

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


// const number = 100

// function calculateAge(myAge){
//     return number - myAge
// }
// function fullName(firstName , lastName){
//     return '.My full name is ' + firstName + lastName
// }

// function info(firstName, lastName){
//     const age = calculateAge(35)
//     if (age < 0) {
//         console.log('age cant be less then zerro')
//     } else if (age > 90) {
//         console.log('yor older man')
//     }
//     const name = fullName(firstName, lastName)
//     console.log('My age: ' + age + name)
// }

// info('Mark', ' Mazur')
// info('Masha', ' red')
// info('dasha', ' green')


// 5 array

//               0        1        2    
// const array = ['mark', 'mazur', 'sasha']

// console.log(array)

// // 0, 1, 2, 3 this is index

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])

// console.log(array.length)
// array[0] = 'artem'
// array[3] = 'masha'
// console.log(array)


// 6 for

//               0        1        2 
// const names = ['mark', 'mazur', 'sasha']

// for (let i = 0; i < names.length; i++){
//     console.log(i)
// }

// // 0, 1, 2...9
// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log(' ')

// // 0, 1, 2...10
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// // 0 - mark, 1 - mazur, 2 - sasha, undefined 3 - ???, 4 - ???...10 - ???  
// for (let i = 0; i <= 10; i++){
//     console.log(names[i])
// }

// for (let name of names){
//     console.log(name)
// }

const user = {
    firstName: 'Mark',
    lastName: 'Mazur',
    DOB: 2007,
    gender: 'male',
    status: 'single',
    russion: true,
    eat: function(){
        console.log('I an going eat')
    },
    lang: ['en', 'ru']
}

console.log(user.firstName + ' ' + user.lastName)

console.log(user.russion + ' ' + user.gender)

console.log(user.firstName + ' ' + user.lastName + ' ' + user.DOB + ' ' + user.russion)
user.eat()

user.firstName = 'masha'

// console.log(user) this is full object
console.log(user)

// firstName this is key
console.log(user['firstName'])

console.log(user.lang)