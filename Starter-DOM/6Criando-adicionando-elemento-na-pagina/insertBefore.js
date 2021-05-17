// Criando o elemento para inserir
const h2 = document.createElement('h2')
h2.innerText = 'Sub título aqui'

// insertBefore
 const body = document.querySelector('body')
 
 const h1 = document.querySelector('h1')
 
body.insertBefore(h2, h1)

// Trick para inserir depois de um elemento.
//body.insertBefore(h2, h1.nextSibling)