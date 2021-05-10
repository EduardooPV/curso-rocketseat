
let techs = ["html", "css", "js"]


// Adicionar um item no fim
techs.push("nodejs")

// Adicionar no começo
techs.unshift("sql")

// Remover do fim
techs.pop()

// Remover do começo
techs.shift()

// Pegar somente alguns elementos do array
console.log(techs.slice(1, 3))

// Remover 1 ou mais items de qualquer posição do array
techs.splice(1, 2)

// Encontrar a posicação de um elemento do array
let index = techs.indexOf("sql")
techs.splice(index, 1)

console.log(techs)