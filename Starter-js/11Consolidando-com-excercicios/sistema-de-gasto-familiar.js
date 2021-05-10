/*

    Sistema de gasto familiar

    Crie um objeto que possuiará 2 propriedades, ambas do tipo array
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo posotivo ou negativo, seguindo o valor do saldo.

*/

 let family = {
     incomes: [2500, 202, 200, 450, 190, 225],
     expenses: [302.50, 2001.21, 822.9, 1525,50]
 }

 function sum(array) {
    let total = 0
    
    for(let value of array) {
        total += value
    }

    return total
 }



 function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"
    if (itsOk) {
        balanceText = "Positivo"
    }
    
    console.log(`Seu lado é ${balanceText}: R$ ${total.toFixed(2)}`)

 }

 calculateBalance()