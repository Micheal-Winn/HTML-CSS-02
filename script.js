// //destruction in object
// const family ={name: 'U Nyo Than', email: 'unyothan@gmail.com', number: '1234567'}

// const {name, email, number} = family;
// console.log (name, email, number)

// // destruction in array

// const cities = ['myanmar', 'malaysia','thai','singapore'];

// const [nation1, nation2, nation3, nation4] = cities;
// console.log (nation1, nation2, nation3, nation4)

//spread operator in object
// const family ={name: 'U Nyo Than', email: 'unyothan@gmail.com', number: '1234567'}

// const secondFamily = {...family}
// console.log(secondFamily)

// //spread operator in array

// const cities = ['myanmar', 'malaysia','thai','singapore'];
// const secondCities = [...cities]
// console.log(secondCities)


//rest parameters in object

// let value =(...params) => {
//     let total = 0;
//     for (let i =0; i < params.length; i++) {
//         total += params[i]
//     }
//     return total;
// }
// let result = value(1,2,3,4)
// console.log(result)
// //console.log(value(1,2,3,4))

let calculate = (...params) => {
    let calculateValue = 0;
    for (let i =0 ; i <params.length ; i++) {
        calculateValue += params[i];
    }
    return calculateValue
}
console.log(calculate(1,5,7,9))

let names = (...params) => {
    let cities = 'Mandalay';
    for (let i = 0; i < params.length; i++) {
        cities += params[i];
    }
    return cities
}
console.log(names('Yangon','Saging','Monywa','Myaung'))