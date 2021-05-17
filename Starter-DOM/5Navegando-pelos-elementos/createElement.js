// Criando e adicionando elementos

// createElement
const header = document.createElement('header')
header.innerText = "Header aqui!!"

// append prepend
const body = document.querySelector('body')

// body.append(header)

body.prepend(header)