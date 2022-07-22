// Class definition
class Person {
  constructor(name) {
    this._nameAndLastName = name
  }

  hello() {
    return `Hello, I'm ${this._nameAndLastName}.`
  }
}

// Class inheritance
class Programmer extends Person {
  hello() {
    console.log('Class Programmer')
    return super.hello() + ' I am a Programmer.'
  }
}

const person = new Programmer('Renato Brito')
console.log(person.hello())

// Static methods
class Dog {
  static genericBark() {
    console.log('\nStatic Methods')
    return 'Woof!'
  }
}

console.log(Dog.genericBark())

// Getters and Setters
class Animal {
  constructor(name) {
    this._animalName = name
  }

  set name(value) {
    this._animalName = value
  }

  get name() {
    return this._animalName
  }
}

const lion = new Animal('Zion')
console.log(`\n${lion._animalName}`)
