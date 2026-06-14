let frase = prompt("Ingrese una frase de hasta 20 caracteres")
if (frase.length > 20) {
    document.write( " la frase supera los 20 cracateres")
} else {
    let vocales = "aeiouAEIOU"
    resultado = ""
    for (let i = 0; i < 20; i++) {
        if (frase.charAt(i) === "a" || frase.charAt(i) === "e" ||
            frase.charAt(i) === "i" || frase.charAt(i) === "o" ||
            frase.charAt(i) === "u" || frase.charAt(i) === "A" ||
            frase.charAt(i) === "E" || frase.charAt(i) === "I" ||
            frase.charAt(i) === "O" || frase.charAt(i) === "U") {
            resultado = resultado + frase.charAt(i);
        }
    }
    document.write("Vocales encontradas: " + resultado);
}