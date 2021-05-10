// Contar elementos do array

console.log([
    "a",
    {type: "array"},
    function() { return "alo" },    
][2]())

// Simplificado

console.log(["a", "b", "c"].length)