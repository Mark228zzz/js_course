
// arrays

const array1 = ['Mark', 'Mazur', 'Dasha', 'Masha']
// const array7 = ['Mark', 'Mazur', 'Dasha', 'Masha']
// const array8 = ['Mark', 'Mazur', 'Dasha', 'Masha']
// const array9 = ['Mark', 'Mazur', 'Dasha', 'Masha']
// const array10 = ['Mark', 'Mazur', 'Dasha', 'Masha']
// const array2 = [1, 2, 3, 4, 5, 6]
// const array3 = [true, false, false, true]
// const array4 = [['M', 'a', 'r', 'k'], [true, false, false, true], [1, 2, 3, 4, 5, 6], [true, 1, 1000000, 'sdagdfsfwsefe']]
// const array5 = [{'M':'a'}, {'r':'k'}, {'M':'a'}, {'r':'k'}]

// // add olia in array1
// // push - add at the end array
// array1.push('olia')

// // delete zero index in array1
// // shift - delete zero index
// const first = array1.shift()

// // add kosta in array1
// // unshift - add at the start array
// array1.unshift('kosta')

// // removes the end of the array1
// // pop = removes the end
// const last = array2.pop()

// console.log(array2.pop())
// console.log(array2)

// console.log('delete', last)
// console.log('delete', first)

// // array mirrored
// console.log(array1.reverse())

// const text = 'my name is Mark and i am full stack dev'
// const revers = text.split("").reverse().join('') // ved kcats lluf ma i dna kraM si eman ym

// array1.forEach(function(item, index) {
//     console.log(item, index) // Mark - 0   // Mazur - 1   // Dasha - 2   // Masha - 3 n+
//     console.log(array1)
// })

// console.log(revers)

// console.log(array1.indexOf('Mark')) //  0
// console.log(array1.indexOf('Mazur')) // 1
// console.log(array1.indexOf('Dasha')) // 2
// console.log(array1.indexOf('Masha')) // 3

// removeItem = array1.splice(1, 1) // remove in array1 Mazur
// console.log(array1)

// const x = array1 // copy array1

// console.log(x)
// console.log(array1)

// const users = [
//     { name: 'Mark',  age: 25 },
//     { name: 'Mazur', age: 35 },
//     { name: 'Dasha', age: 30 },
//     { name: 'Masha', age: 55 }
// ]

// const array = []
// const array6 = []

// const resultIndex1 = users.findIndex(function(user) {
//     return user.age >= 30
// })

// const resultIndex2 = users.findIndex(function(user) {
//     if(user.age >= 30) {
//         array.push(user)
//     }
    
// })

// const resultIndex3 = users.find(function(user) {
//     return user.age === 30
// })

// const resultIndex4 = users.filter( user => user.age >= 30 )

// console.log(users[resultIndex1])
// console.log(array)
// console.log(resultIndex3)
// console.log(resultIndex4)

// console.log(array1.includes('Dasha')) // true
// console.log(array1.includes('dasha')) // false

// const upperCase = name => name.toUpperCase()

// const newArray1 = array1.map(upperCase)
// const newArray2 = array7.map(upperCase)
// const newArray3 = array8.map(upperCase)
// const newArray4 = array9.map(upperCase)
// const newArray5 = array10.map(upperCase)

// console.log(array1)
// console.log(newArray1)
// console.log(newArray2)
// console.log(newArray3)
// console.log(newArray4)
// console.log(newArray5)

// const upperCase = data => data.toUpperCase()
// const newArray = array1.map(upperCase).find(user => user === 'MAZUR')
// console.log(newArray)

// const upperCase = data => data.toUpperCase()
// const newArray = array1
// .map(upperCase)
// .find((user) => user === 'MARk')
// .split('')
// .reverse()
// .join('-')

// console.log(newArray)

// const users = [
//     { name: 'Mark', age: 23, year: 2007  },
//     { name: 'Mazur', age: 21, year: 1400 },
//     { name: 'Masha', age: -8, year: 1563 }
// ]

// const sorts = users.sort(function(a,b) {
//     return a.year - b.year
// })

// const sorts2 = users.sort((a, b) => a.year - b.year)

// console.log(sorts)
// console.log(sorts2)