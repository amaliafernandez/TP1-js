const numero = parseInt(prompt("ingrese un número: "))

let divisible2 = numero % 2 === 0
let divisible3 = numero % 3 === 0
let divisible5 = numero % 5 === 0
let divisible7 = numero % 7 === 0

if (divisible2 && divisible3 && divisible5 && divisible7) {
    document.write("El " + numero + " es divisible por 2, 3, 5 y por 7")
}
if (divisible2 && divisible3 && divisible5 && !divisible7){
    document.write("El " + numero + " es divisible por 2, 3 y por 5")
}
if (divisible2 && divisible3 && !divisible5 && divisible7){
    document.write("El " + numero + " es divisible por 2, 3 y por 7")
}
if (divisible2 && !divisible3 && divisible5 && divisible7){
    document.write("El " + numero + " es divisible por 2, 5 y por 7")
}
if (!divisible2 && divisible3 && divisible5 && divisible7){
    document.write("El " + numero + " es divisible por 3, 5 y por 7")
}
if (divisible2 && divisible3 && !divisible5 && !divisible7){
    document.write("El " + numero + " es divisible por 2 y por 3")
}
if (divisible2 && !divisible3 && divisible5 && !divisible7){
    document.write("El " + numero + " es divisible por 2 y por 5")
}
if (!divisible2 && divisible3 && divisible5 && !divisible7){
    document.write("El " + numero + " es divisible por 3 y por 5")
}
if (divisible2 && !divisible3 && !divisible5 && divisible7){
    document.write("El " + numero + " es divisible por 2 y por 7")
}
if (!divisible2 && divisible3 && !divisible5 && divisible7){
    document.write("El " + numero + " es divisible por 3 y por 7")
}
if (!divisible2 && !divisible3 && divisible5 && divisible7){
    document.write("El " + numero + " es divisible por 5 y por 7")
}
if (divisible2 && !divisible3 && !divisible5 && !divisible7){
    document.write("El " + numero + " es divisible por 2 ")
}
if (!divisible2 && divisible3 && !divisible5 && !divisible7){
    document.write("El " + numero + " es divisible por 3 ")
}
if (!divisible2 && !divisible3 && divisible5 && !divisible7){
    document.write("El " + numero + " es divisible por 5")
}
if (!divisible2 && !divisible3 && !divisible5 && divisible7){
    document.write("El " + numero + " es divisible por 7")
}
if (!divisible2 && !divisible3 && !divisible5 && !divisible7){
    document.write("El " + numero + " no es divisible por ninguno")
}