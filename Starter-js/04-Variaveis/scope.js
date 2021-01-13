// Const e let são locais e só funcionam no escopo onde foi criado

// console.log('> existe x antes do blocol? ', x)
{
    let y = 0
    console.log('> existe y ', y)
}

console.log(' > existe x depois do bloco?', y)