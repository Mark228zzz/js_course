
// // objects

// const user = {
//     name: 'Mark',
//     age: 14,
//     isDeveloper: true,
//     devLang: ['ruby', 'js', 'php'],
//     coding(lang, level){
//         return `Language: ${lang}, Level: ${level}` 
//     },
//     fullName() {
//         return `Name: ${this.name} Age: ${this.age}`
//     }
// }

// const user2 = {
//     name: 'Mazur',
//     age: 23
// }

// console.log(user.name)
// console.log(user.age++) // age - 35
// console.log(user.age) // age - 36
// console.log(user.devLang.push('python'))
// console.log(user.devLang)
// console.log(user.coding('JavaScript', 5))

// const name = user.name
// const age = user.age

// const { anem, age } = user

// console.log(user)

// for (let key in user) {
//     console.log('key:', key)
//     console.log('value:', user[key])

// Object.keys(user).forEach((key) => console.log('key:', key, 'value:', user[key]))

// console.log(user.fullName())

// const getPersonInfo = {
//     keys() {
//         console.log('Keys:', Object.keys(this))
//     }
// }

// getPersonInfo.keys.bind(user)()
// getPersonInfo.keys.bind(user2)()

// getPersonInfo.keys.call(user)
// getPersonInfo.keys.call(user2)