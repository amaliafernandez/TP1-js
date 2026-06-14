const numero  = parseInt(prompt("ingrese un número: "))
if(numero % 2 === 0){
    document.write("el " + numero + " es divisible por 2")
}else {
    if (numero % 3 === 0) {
        document.write("el " + numero + " es divisible por 3")
    }else {
        if(numero % 5 === 0){
            document.write("el " + numero + " es divisible por 5")
        }else {
            if(numero % 7 === 0) {
                document.write("el " + numero + " es divisible por 7")
            }else {
                document.write("el " + numero + " no es divisible por 2, 3, 5 o 7")

            }
        }

    }
}

//prueba : 20, 15, 25, 49  y 17