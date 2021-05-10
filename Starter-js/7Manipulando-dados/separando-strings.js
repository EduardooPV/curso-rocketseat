// Primeira maneira usando SWITCH
function calculadoraAdicaoSubtracao (numero, outroNumero, operacao) {
    let resultado = 0 
    switch (operacao) {
        case '+':
            resultado = numero + outroNumero
            break;
        
        case '-':
            resultado = numero - outroNumero
            break;

        default:
            resultado = 0
    }

    return resultado
}

console.log(calculadoraAdicaoSubtracao(5,5,"+"))

// Segunda maneira usando Else If
function calculadoraAdicaoSubtracao2 (numero, outroNumero, operacao) {
    resultado = 0 
    if (operacao == "+") {
        resultado = numero + outroNumero
    } else if (operacao == "-") {
        resultado = numero - outroNumero
    }

    return resultado
}

console.log(calculadoraAdicaoSubtracao2(10,5,"-"))