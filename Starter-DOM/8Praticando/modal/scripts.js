// Pegando as variaveis do HTML
const title = document.querySelector('h1')

const buttonOpenModal = document.getElementById('openModal')

const modal = document.querySelector('.modal')

// Função para abrir o modal, adicionando a class invisible(Com Display:None) no botão e no título
buttonOpenModal.onclick = function() {
  modal.classList.remove('invisible')
  
  title.classList.add('invisible')
  buttonOpenModal.classList.add('invisible')
}

// Event keydown para remover as class invisivel e adicionar ao modal novamente
document.addEventListener('keydown', function(event) {
  
  if (event.key === "Escape") {
  modal.classList.add('invisible')
  
  title.classList.remove('invisible')
  buttonOpenModal.classList.remove('invisible')
  }
})