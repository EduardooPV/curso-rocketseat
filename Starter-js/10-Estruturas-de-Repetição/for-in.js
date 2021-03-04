// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 90.2
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}