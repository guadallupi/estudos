//LogicOperator: AND (&&)

console.log("Karla foi parada em uma blitz")

const idadeKarla = 18
const karlaPossuiCNH = false

console.log("Karla vai ser presa?", idadeKarla >= 18 && karlaPossuiCNH === false) //true

//Logic Operator OR (||)

const karlaPossuiRG = true

console.log("Karla conseguiu provar que é maior de idade ?", karlaPossuiRG || idadeKarla >= 18) //true

//Logic Operator NOT (!)

const gostaDeDancar = true
const karlaGostaDeDancar = !gostaDeDancar

console.log("Karla gosta de dançar?", karlaGostaDeDancar) // false
