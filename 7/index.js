const x = 'x'
const y = 'y'
console.log(x, y)

/*
    %s format a variable as a string
    %d format a variable as a number
    %i format a variable as its integer part only
    %o format a variable as an object
*/
console.log('My %s has %d years', 'cat', 2)
console.log('My %s has %i years', 'cat', 2)

console.log('%o', Number)
console.log('%o', Number.length)
console.log('%o', Number.name)

console.clear()

const a = 1
const b = 2
const z = 3
console.count(
    'The value of a is ' + a +
    ' and has been checked .. how many times?'
)
console.count(
    'The value of a is ' + a +
    ' and has been checked .. how many times?'
)
console.count(
    'The value of b is ' + b +
    ' and has been checked .. how many times?'
)

console.clear()

const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
    console.count(fruit)
})
apples.forEach(fruit => {
    console.count(fruit)
})

console.clear()

const function2 = () => console.trace()
const function1 = () => function2()
function1()

console.clear()

// คำนวณเวลา
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()