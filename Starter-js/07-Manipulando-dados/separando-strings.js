// Separando um texto que contem espaços, em um novo array ondce cada texto é uma posição do array. e dps colocar _ em cada espaço

let phrese = "Eu quero viver o Amor"
let myArray = phrese.split(" ")

console.log(myArray)

let phreseWithUnderscore = myArray.join("_")

console.log(phreseWithUnderscore.toLowerCase())