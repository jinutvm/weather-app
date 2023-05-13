// comments 
console.log('Hello from main1.js')

let age = 25
age = age + 1 
console.log(age)

const salary = 1000
//salary = 5000
console.log(salary)


const person = {
    firstname: 'Jinu',
    lastname: 'Babu'

}

console.log(person.firstname)

const oddnumber = [1,3,5,7,9]
console.log(oddnumber[1])

console.log('Jinu ' + 'Babu')
let num= 15
const isEven = num % 2 === 0 ? 'Number is even' : 'Number is odd'
console.log(num, isEven)
console.log ('-------')
const num1 = 0
if (num1>0){
    console.log('Number is positive')
} else if (num1 <0) {
    console.log('Number is negative')
} else {
    console.log('Number is zero')
}
console.log ('------2')

const color = 'black'
switch(color) {
    case 'red': 
    console.log('Color is red')
    break
    case 'blue':
        console.log('color is blue')
        break
    case 'white': 
        console.log('color is white')
        break
    default:
        console.log('Not valid color')
    

}

for (let i =1; i <=5; i++){
    console.log('Printing occurance ' + i)
}

let xi=1
while(xi<=5){
    console.log('Printing occurance' + xi)
    xi++
}

let x2=1

do{
   console.log('Occurance2 '+x2)
   x2++
}while(x2<=5)

function greet(name){
    console.log('Good Morning '+ name)
}

greet('Jinu')

function add(x,y){
    return x+y
}

z=add(2,3)
console.log(z)

const arrowsum = (a1,b1) => {
return a1+b1
}
console.log(arrowsum(20,30))

const arrowsum1 = (a2,b2) => a2+b2
console.log(arrowsum1(25,35))

const add5 = num => num+5
console.log(add5(30))

if (true){
    let hi = 'Hello'
    console.log(hi)
}
//console.log(hi)
const h2 = 100

const printHello = () => {
    let h1= 'Hello1'
    console.log(h1)
    console.log(h2)
}
printHello()
console.log(h2)

