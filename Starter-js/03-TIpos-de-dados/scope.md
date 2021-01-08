# Scope

* Escopo determina a visibilidad de alguma variável no JS

# Block statement

```js
// Vamos iniciar um bloco
{
    // Aqui dentro é um blocl
}
// Fechando o bloco
```

## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do blocol? ', x)
{
    var x = 0
}

console.log(' > existe x depois do blocl?', x)
```


## let e const

```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log()

```