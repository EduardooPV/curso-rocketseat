// Eventos

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
  console.log('Printei')
}

h1.addEventListener('click', function () {
  console.log('Outro print')
})