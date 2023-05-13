//Comment multiple lines - Select and press CMD + / 

// Nested function scopes 

// let a=10 
// const outer = () => {
//     let b=20
//     const inner = () => {
//         let c=30
//         console.log(10,20,30)
//     }
//     inner()
// }
// outer()

//******Closures *****

// const outer = () => {
//     let counter = 0
//     const inner = () => {
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer()
// outer()

// const outer = () => {
//     let counter = 0
//     const inner = () => {
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()

// person = {
//     'name': 'Jinu'
//     const sayMyName = (name) => {
//         console.log)(`My name is ${this.name}`)
//     }
// }

// const sayMyName = (name) => {
//     console.log(`My name is ${this.name}`)
// }

// sayMyName.call(person)

// Function to print the name 
// const sayMyName = (name) => {
//     console.log(`My name is ${name}`)
// }

// sayMyName('Jinu')

// //===Concept of this keyword
// //=======Implicit binding========
// // Create an object Person
// const person = {
// // Person has a object     
//     'name': 'Jacob',
// // Define a method in the object. Almost similar to a function    
//     sayMyName: function () {
//         console.log(`My name is ${this.name}`)
//     }
// }
// //call the method sayMyName which is in object Person. This will be person.name
// person.sayMyName()

//====Explicit binding=====

// const person = {
//     'name': 'Jinu'
// }
// const sayMyName = () => {
//     console.log(`My name is ${this.name}`)
// }
// sayMyName.call(person)

//=====Prototype======

// const Person = (fname,lname) => {
//     this.firstname = fname
//     this.lastname = lname
// }

function Person (fname,lname) {
    this.firstname = fname
    this.lastname = lname
}

const person1= new Person('Jinu','Babu')
const person2= new Person('Sunu','Babu')



Person.prototype.getfullname = function () {
    return this.firstname + ' ' + this.lastname
}

console.log(person2.getfullname())
console.log(person1.getfullname())