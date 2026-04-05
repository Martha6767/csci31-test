// 2.0 create an array with no elements inside of it, log the array
const array = []
console.log(`array: ${JSON.stringify(array, null, 2)}`)
// 2.1 use array.push to add a number to the array, log the array
array.push(1)
console.log(`array: ${JSON.stringify(array, null, 2)}`)
// 2.2 create a new array with a number already inside of it, log the array
const array2 = [67]
console.log(`array2: ${JSON.stringify(array2, null, 2)}`)
// 2.3 use array.pop to remove an element from the back of the array
array2.pop()
console.log(`array2: ${JSON.stringify(array2, null, 2)}`)
// 2.4 push two more numbers innto your array
array2.push(6, 7)
console.log(`array2: ${JSON.stringify(array2, null, 2)}`)
// 2.5 use spread syntax to combine arrays from above problems, log the results
const array3 = [...array,...array2]
console.log(`array3: ${JSON.stringify(array3, null, 2)}`)

// 2.6 use array.find to locate one of the elements in your array, log the located result
const found = array3.find((number) => number == 7)
console.log(`found: ${found}`)
// 2.7 use array.every to determine if every single number is above "5", log the result
const areAllNumbersAboveFive = array3.every((number) => number > 5)
console.log(`areAllNumbersAboveFive: ${areAllNumbersAboveFive}`)
// 2.8 use array.filter to remove any numbers smaller than 5, log the result
const numbersGreaterThanFive = array3.filter((number) => number > 5)
console.log(`numbersGreaterThanFive: ${JSON.stringify(numbersGreaterThanFive, null, 2)}`)
// 2.9 use array.sort to sort the items from smallest to largest
const sortedarray = array3.sort()
console.log(`sortedarray: ${sortedarray}`)
// 2.91 use array.reverse to reverse the items so that they are now largest to smallest
const reverseSortedarray = sortedarray.reverse()
console.log(`reverseSortedArray: ${reverseSortedarray}`)
// 2.92 use array.reduce to sum up the entire list of numbers in the array
const sum = array3.reduce((sum, currantNumber) => (sum += currantNumber), 0)
console.log(`sum: ${sum}`)
// 2.93 use array.map to scale each number in the array up by a factor of 10
const scaledarray = array3.map((number) => number * 10)
console.log(`scaledarray: ${scaledarray}`)