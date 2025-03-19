//Igualdade

const x = 5
const y = 10
const z = "5"

console.log("O número " + x + " é igual ao número " + y, x === y) //false: operador de igualdade estrita

console.log("O número " + x + " é igual ao número " + z, x == z) //true: operador de igualdade frouxa

console.log("O número " + x + " é igual ao número " + z. x === z) //false: operador de igualdade estrita

//Diferença

console.log("O número " + x + " é diferente do número " + y, x !== y) //true

console.log("O número " + x + " é diferente do número " + z, x !== z) //true: operador de igualdade estrita

console.log("O número " + x + " é diferente do número " + z, x!= z) //false: operador de igualdade frouxa
