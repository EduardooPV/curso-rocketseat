// Eventos
// Argumentos de eventos

const input = document.querySelector('input')

input.onclick = function(event) {
  console.log(event)
}


input.onkeypress = function(event) {
  if (event.key == "a") {
    console.log('Foi')
  }
}