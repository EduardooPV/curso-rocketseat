// Throw

function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é necessário"
    }

    console.log('Depois do erro')
}

// Try... catch
try {
    sayMyName("")
} catch (e) {
    console.log(e)
}

console.log('Após a função de erro')