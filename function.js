// Syntax
function dosomething(a = 1) { return a }
console.log('Function syntax!')
console.log(dosomething('Renato'))

// Function expression
const dosomething = function (b = 2) { return b }
console.log('\nFunction expression!')
console.log(dosomething(true))

// Named function expression
const dosomething = function dosomething(c = 3) { return c }
console.log('\nNamed function expression!')
console.log(dosomething(123))

// Arrow function
const dosomething = foo => foo
console.log('\nArrow function!')
console.log(dosomething(9))

/* PARAMETERS */
// One parameter
const saySomething = text => text
console.log('\nOne parameter')
console.log(saySomething('Hello'))

// Two paramaters or more
const sum = (a, b) => a + b
console.log('\nParameters')
console.log(sum(1, 1))

// Spread operator
const readList = item => item
const fruits = ['apple', 'pinaple', 'strawberry']
console.log('\nSpread operator')
console.log(readList([...fruits]))

// Destructuring
const personalData = ({ name = '', age = 0 }) => {
  console.log(name)
  console.log(age)
}

const data = { name: 'Renato', age: 30 }
console.log('\nDestructuring')
console.log(data)

/* RETURN VALUES */
const arrayStationFromSP = () => {
  return ['Brigadeiro', 'Linha Verde']
}
const [ nameStationOne, colorStationOne ] = arrayStationFromSP()

console.log('\nReturn values - Array')
console.log(arrayStationFromSP())


const objectStationFromSP = () => {
  return { nameStation: 'Japão-Liberdade', colorStation: 'Linha Azul'}
}
const { nameStation, colorStation } = objectStationFromSP()
console.log('\nReturn values - Object')
objectStationFromSP()

// Nested function
const dosomething = () => {
  const dosomethingElse = () => {
    return undefined
  }
  dosomethingElse()
  return 'test'
}
dosomething()

/* OBJECTS METHODS */
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log('Started')
  }
}
car.start()

// With arrow function
const movie = {
  title: 'The Lord Of The Rings',
  subtitle: 'The Fellowship Of The Ring',
  director: 'Peter Jackson',
  startWatch: function() {
    console.log(this)
    console.log(`Watching: ${this.title} - ${this.subtitle} \nDirected by: ${this.director}.`)
  },
  stopWatch: function() {
    console.log(this)
    console.log(`\nStoping: ${this.title} - ${this.subtitle}`)
  }
}
movie.startWatch()
movie.stopWatch()

// IIFE, Immediately Invocated Function Expressions
;(function dosomething() {
  console.log('executed')
})()

const something = (function dosomething() {
  return 'executed'
})()