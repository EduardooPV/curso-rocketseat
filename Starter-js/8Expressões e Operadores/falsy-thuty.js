// Type conversion (Typecasting) vs Type coersion

console.log(Number('9') + 5)

/* FALSY 
Quando o valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )
    
    False
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( 0 ? "Verdadeiro" : "Falso" )

/* TRHTHY
Quando o valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )
    
    true 
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( "0" ? "Verdadeiro" : "Falso" )