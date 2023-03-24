const Reversa = (arr) => {
    // Recorremos la mitad de la matriz y vamos intercambiando los valores
    // de los extremos, hasta que llegamos al medio de la matriz
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        // Guardamos el valor del elemento actual en una variable temporal
        var temp = arr[i];
        // Asignamos el valor del último elemento al elemento actual
        arr[i] = arr[arr.length - 1 - i];
        // Asignamos el valor guardado en la variable temporal al último elemento
        arr[arr.length - 1 - i] = temp;
    }
    // Devolvemos la matriz modificada
    return arr;
}
Reversa([4, 5, 9, 7, 3])

// La función 'rotateArr' acepta una matriz 'arr' y una cantidad de desplazamiento 'shiftBy'.
function Girar(arr, shiftBy) {
    // Si la cantidad de desplazamiento es mayor que la longitud de la matriz, la cantidad de desplazamiento se ajusta al módulo de la longitud de la matriz para evitar desplazamientos innecesarios.
    shiftBy %= arr.length;
    // Si la cantidad de desplazamiento es negativa, se ajusta para desplazar a la izquierda en lugar de a la derecha.
    if (shiftBy < 0) {
        shiftBy += arr.length;
    }
    // El bucle externo ejecuta el desplazamiento por la cantidad especificada.
    for (let i = 0; i < shiftBy; i++) {
        // Se guarda el último elemento de la matriz en una variable temporal.
        let temp = arr[arr.length - 1];
        // El bucle interno desplaza cada elemento de la matriz a la derecha por una posición.
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        // El último elemento de la matriz (que fue guardado en la variable temporal) se mueve al principio de la matriz.
        arr[0] = temp;
    }
    // Se devuelve la matriz desplazada.
    console.log(arr);
}
Girar([1, 2, 3, 4, 5, 6, 7, 8], 2)


const RangoDeFiltro = (arr, min, max) => {
    let start = 0; // índice inicial donde se deben conservar los valores dentro del rango especificado
    let end = 0; // índice final donde se deben conservar los valores dentro del rango especificado

    // Iterar sobre la matriz
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            // Si un valor está dentro del rango especificado, se debe conservar
            arr[start] = arr[i];
            start++; // Actualizar el índice inicial
            end++; // Actualizar el índice final
        } else {
            // Si un valor está fuera del rango especificado, se debe eliminar
            end++; // Actualizar el índice final
        }
    }

    // Eliminar cualquier elemento restante después del índice final actualizado
    while (arr.length > end) {
        arr.pop();
    }

    return arr;
}
RangoDeFiltro([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 6, 12)

const Concat = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        arr1[arr1.length] = arr2[i];
    }
    return arr1;
}

Concat(["a", "b"], [1, 2])