
// // Event loop

// let count2 = 0

// console.log('1', new Date().getSeconds())

// const int = setTimeout(() => {
//     console.log('2', new Date().getSeconds())
//     clearInterval(int)
// }, 1000)

// const int2 = setInterval(() => {
//     count2 === 5 ? clearInterval(int) : console.log(++count2)
// }, 400)

// const getInfo = (callback, time = 500) => {
//     setTimeout(callback, time)
//     clearTimeout(getInfo)
// }
// getInfo(() => console.log('Mark'), 500)

// const getInfo = (time = 500) => {
//     const promise = new Promise((resolve, reject) => {
        
//         time >= 550 ? reject('My ERROR') : setTimeout(() => resolve('async first'), time)
//     })
//     return promise
// }

// getInfo(2000)
// .then(() => console.log('--- Start ---'))
// .catch(error => console.log(error))
// .finally(() => console.log('--- Finally ---'))

// const getInfo2 = () =>
//    new Promise(resolve => resolve(['Mark', 'Mazur', 'Dasha', 'Masha']))

//    getInfo2().then( data => console.log(data))


// async function asyncFunction() {
//     try {
//         const info1 = await getInfo(2500)
//         typeof info1 === 'undefined' ? '' : console.log(info1)
//         const info2 = await getInfo2
//         console.log(info2)
//     } catch(e) {
//         console.log(e)
//     } finally {
//         const a = 1 + 10
//         console.log(a)
//     }
// }

// asyncFunction()