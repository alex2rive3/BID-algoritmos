const pushToFront = (arr, number) => {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = number;
    console.log(arr);
}
pushToFront([1, 2, 3, 4], 9)

const popToFront = (arr) => {
    // Recorre la matriz de izquierda a derecha, comenzando desde la primera posición
    // y moviendo cada elemento existente un lugar hacia la izquierda
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]; // Asigna el valor del elemento siguiente al elemento actual
    }

    // Establece la última posición de la matriz en undefined, eliminando el valor que estaba allí antes
    arr[arr.length - 1] = undefined;

    // Devuelve la matriz modificada
    console.log(arr);
}
popToFront([1, 3, 4, 5, 8])

const insertAt = (arr, index, number) => {
    // Recorre la matriz de derecha a izquierda, comenzando desde la última posición
    // y moviendo cada elemento existente un lugar hacia la derecha, hasta llegar al índice dado
    for (var i = arr.length - 1; i >= index; i--) {
        arr[i + 1] = arr[i]; // Asigna el valor del elemento anterior al elemento siguiente
    }

    // Inserta el valor dado en el índice especificado
    arr[index] = number;

    // Devuelve la matriz modificada
    return arr;
}
insertAt([2, 3, 4, 5, 6], 2, 99)


const removeAt = (arr, idx) => {
    // Recorre la matriz de izquierda a derecha, comenzando desde el índice dado
    // y moviendo cada elemento existente un lugar hacia la izquierda, sobrescribiendo el elemento en el índice dado
    for (var i = idx; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]; // Asigna el valor del elemento siguiente al elemento actual
    }

    // Establece la última posición de la matriz en undefined, eliminando el valor que estaba allí antes
    arr[arr.length - 1] = undefined;

    // Devuelve la matriz modificada
    return arr;
}

removeAt([4, 5, 6, 7, 8, 9], 1)

const tradingPairs = (arr) => {
    for (var i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    console.log(arr);
}
tradingPairs([1, 2, 3, 4])
tradingPairs(["Brendan", true, 42])

const removeDuplicado = (arr) => {
    // Inicializa un contador para el índice de la próxima posición única.
    // Como el primer elemento de la matriz ya es único, el contador comienza en 0
    var siguientePosicionUnica = 0;

    // Recorre la matriz original de izquierda a derecha, comenzando desde el segundo elemento.
    // El primer elemento ya está en la posición única, por lo que se omite en la iteración
    for (var i = 1; i < arr.length; i++) {
        // Compara el elemento actual con el último elemento único en la matriz
        if (arr[i] !== arr[siguientePosicionUnica]) {
            // Si el elemento actual es diferente al último elemento único, actualiza la posición siguiente
            // única y mueve el elemento actual a la posición siguiente única en la matriz
            siguientePosicionUnica++;
            arr[siguientePosicionUnica] = arr[i];
        }
        // Si el elemento actual es igual al último elemento único en la matriz, no se mueve y se omite
    }

    // Ajusta la longitud de la matriz original para eliminar los elementos duplicados
    arr.length = siguientePosicionUnica + 1;

    // Devuelve la matriz original modificada
    return arr;
}
removeDuplicado([1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 7, 8, 9])