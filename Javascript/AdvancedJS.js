// function rollDie(numSides = 6) {

//     return Math.floor(Math.random() * numSides) + 1
// }

// REST PARAMETERS


// function sum(...nums) {
//     return nums.reduce((total, el) => total + el);
// }

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`Gold Medal Goes To: ${gold}`)
//     console.log(`Gold Silver Goes To: ${silver}`)
//     console.log(`Thank you to: ${everyoneElse}`)
// }

// ARRAY DESTRUCTURING

// const scores = [100, 95, 90, 72, 61, 51]


// const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'asdasd@gmail.com',
    password: '123456',
    firstName: 'James',
    lastName: 'Bond',
    born: 1990,
    death: 2019,
    bio: 'James Bond was good with the ladies but not good to himself',
    city: 'San Francisco',
    state: 'Camotes'

}

// const {
//     firstName,
//     lastName,
//     email,
//     password,
//     born,
//     death,
//     city,
//     state,
//     bio
// } = user;

const {
    born: birthyear,
    death: YearDied
} = user;


function fullName({
    firstName,
    lastName
}) {
    return `${firstName} ${lastName}`
}