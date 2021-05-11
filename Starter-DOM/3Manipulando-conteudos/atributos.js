// Manipulando elementos
// Atributos

const header = document.querySelector('header')

// Adicionei
header.setAttribute('class', 'header-title header')

// Peguei
const headerID = document.querySelector('.header-title')

// Checked
console.log(headerID.getAttribute('class'))

// Remove
header.removeAttribute('class')

console.log(headerID.getAttribute('class'))