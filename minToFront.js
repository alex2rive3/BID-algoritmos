function minToFront(lista) {
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    const longitud = lista.length
    for (let k = 0; k < longitud; k++) {
        for (let i = 0; i < (longitud - k); i++) {
            if (lista[i] > lista[i + 1]) {
                //capturamos el valor y realizamos el cambio con el siguiente
                let aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}
minToFront([9, 7, 2, 6, 4, 3, 8, 1, 5])