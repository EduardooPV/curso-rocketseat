// 1. Declare uma variavel de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: string,
        * agr: number,
        * stars: float,
        * isSubscribed: boolean
*/
let name = 'Pedrinho'
let age = 20
let stars = 4.5
let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dados? 

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {}
student = {
    name: 'Pedrinho',
    age: 20,
    weight: 94.5,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

console.log(typeof student)
 
/* 
5. Declare uma variável do tipo Arraym de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
 */
let students = []

/*
    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4, (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array.)
*/
students = [ 
    student
]

console.log(students)

/*
    7. Coloque no console o valor da posicação zero do Array acima
*/
console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/
const john = {
    name: 'John',
    age: 30,
    weight: 88.2,
    isSubscribed: false
}

students[1] = john

console.log(students)

/*
    9. Sem rodar o código responsa qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1

    R: Vai dar erro, por que não vai conseguir acessar os atributos da variável. (ERRADO)
*/
console.log(a)
var a = 1