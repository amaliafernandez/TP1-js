const numero1 = parseInt(prompt("ingrese el primer número: "))
const numero2 = parseInt(prompt("ingrese el segundo número: "))
const numero3 = parseInt(prompt("ingrese el tercer número: "))
if(numero1 > numero2 && numero1 > numero3){
    document.write("El numero " + numero1 + " es el numero mas grande")
} else {
    if (numero2 > numero1 && numero2 > numero3) {
        document.write("El numero " + numero2 + " es el numero mas grande")
    }else
        document.write("El numero " + numero3 + " es el numero mas grande")
}