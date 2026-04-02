// 1.0 Use console.log to output your name
console.log("Martha Vittoratos")

// 1.1 Use object longhand to create an object with properties: firstName, lastName
const person = {firstName:"Martha", lastName:"Vittoratos"}
console.log(person)
// 1.2 Use JSON.stringify to console.log the object
console.log(JSON.stringify(person, null,2))
// 1.3 Use "dot notation" to console.log the firstName property
console.log(person.firstName)
// 1.4 Use "square brackets" to console.log the lastName 
console.log(person["lastName"])
// 1.5 Use object shorthand to create an object with properties: title, subtitle. console.log the object
const title = "My favorite Movie"
const subtitle = "Its a really good movie"
const movie = {title, subtitle}
console.log(movie)
// 1.6 Use destructuring to pull the firstName  out of an object. console.log the firstName
const{fistName} = person
console.log(person.firstName)
// 1.7 Use destructured renaming to pull the lastName property out of an object, rename the property to "surname". console.log the surname.
const{lastName:surname} = person
console.log(surname)
// 1.8 Use spread syntax to create a new object from the old object, but also adds a new property called "secret". console.log the secret
const secret = "afraid of snails"
const newObject = {...Object,secret}
console.log(newObject)
// 1.9 Use rest syntax to pull out the "secret" property, but put everything else into the personWithoutSecret property. console.log the personWithoutSecret
const {secret: copyOfsecret,...personWithoutsecret} = newObject
console.log(personWithoutsecret)
console.log(copyOfsecret)