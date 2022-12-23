// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  //form 1 - weeks to days converter
  weeks.addEventListener('submit', function(event) {
    //prevent form from submitting to server
    event.preventDefault()
    //weeks to day conversion
    let multiplier = 7

    //
    const input = document.querySelector('#weeks .input')
    const userInput = input.value
    const userInputNum = parseInt(userInput)

    //multiply user input by 7 to get # of Days
    const days = userInput * multiplier

    //output to page
    document.querySelector('#weeks .output').innerHTML = days

    document.querySelector('#weeks .userInput').innerHTML = userInput

    //clear form input
    input.value = ''
  })


//form 2 - age in 2050
year2050.addEventListener('submit', function(event) {
  //prevent form from submitting to server
  event.preventDefault()
  //calculate year born
  const age = document.querySelector('#year2050 .input')
  const userAge = age.value
  const birthYear = 2022 - userAge
  let future = [2037, 2050]

  //difference between 2050 and birth year
  //const futureAge = 2050 - birthYear
  let futureAge = future.map(function(value){
    return value - birthYear
  })

  //output to page
  document.querySelector('#year2050 .output').innerHTML = `Wow! You will be ${futureAge[0]} in 2037 and ${futureAge[1]} in 2050.`

  //clear form inputField
  age.value = ''
})

//form 3 - dogs
//current list of names
let woofs = ['Fido', ' Daisy', ' Rover', ' Arlo']
document.querySelector('#dogs .woofs').innerHTML = ` ${woofs} `

dogs.addEventListener('submit',function(event) {
  //prevent form from submitting to server
  event.preventDefault()

//push name suggestions
const input = document.querySelector('#dogs .input')
const newName = ' ' + input.value
woofs.push(newName);

console.log(woofs)
document.querySelector('#dogs .woofs').innerHTML = ` ${woofs}`

//clear form input
input.value = ''
})

//form 4 - fruits

fruits.addEventListener('submit', function(event){
  //prevent form from submitting to server
  event.preventDefault()

  //list
  let fruits = ['apples', 'apple', 'oranges', 'orange', 'grapes', 'mango', 'berries', 'melon']

  const input = document.querySelector('#fruits .input')
  const search = input.value
  let result = fruits.includes(search)

  document.querySelector('#fruits .fruits').innerHTML = result

  //clear form input
  input.value = ''
})



  //final bracket
})
