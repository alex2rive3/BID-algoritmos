//Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco.
//Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".
const QuitarEspacios = (cadena) => {
    return cadena.replace(/\s+/g, '')
}
QuitarEspacios("Pl ayTha tF u nkyM usi c")

// Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado por los dígitos de la cadena. Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el número 1357924680.

function ObtenerDigitos(cadena) {
    let numero = "";
    for (let i = 0; i < cadena.length; i++) {
        if (!isNaN(parseInt(cadena[i]))) {
            numero += cadena[i];
        }
    }
    return parseInt(numero);
}
ObtenerDigitos("0s1a3y5w7h9a2t4? 6! 8? 0")

//Crea una función que, dada una cadena, devuelva el acrónimo de la cadena (solo las primeras letras, en mayúscula). Dado "no hay almuerzo gratis. Debes pagar por tu comida", devuelve "NHAG-DPPTC".
const Acronimo = (cadena) => {
    // Dividimos la cadena en palabras usando el espacio como separador
    let palabras = cadena.split(" ");
    // Creamos una cadena vacía que usaremos para construir el acrónimo
    let acronimo = "";
    // Iteramos sobre cada palabra en la cadena
    for (let i = 0; i < palabras.length; i++) {
        // Agregamos la primera letra de la palabra actual en mayúscula al acrónimo
        acronimo += palabras[i][0].toUpperCase();
    }
    // Devolvemos el acrónimo resultante
    return acronimo;
}
Acronimo("no hay almuerzo gratis. Debes pagar por tu comida")