// Alterando Estilos
// classList

const element = document.querySelector('body')

// Adiciona a class Active
element.classList.add('active')

// Checked
console.log(element.classList)

// Remove a class Active
element.classList.remove('active')

// Adiciona a class Removed
element.classList.add('removed')

// Checa se existe a class Active, se existir ela remove, se não exisir, ela cria.
element.classList.toggle('active')

