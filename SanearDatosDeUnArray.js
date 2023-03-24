const removeNegatives = (arr) => {
    let j = 0; // contador para los elementos no negativos
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) { // si el elemento no es negativo
            if (i !== j) { // si el elemento no negativo no está en la posición correcta
                arr[j] = arr[i]; // mover el elemento no negativo a la posición correcta
            }
            j++; // incrementar el contador de elementos no negativos
        }
    }
    arr.length = j; // acortar la matriz para eliminar los elementos negativos restantes
    return arr;
}
removeNegatives([-1, 2, -30, 4, 5, 9, 6, -1, -5, -8])
const PenultimoElemento = (arr) => {
    // Verificar si la matriz tiene al menos dos elementos
    if (arr.length < 2) {
        return null;
    }

    // Devolver el elemento penúltimo
    return arr[arr.length - 2];
}
PenultimoElemento([42, true, 4, "Kate", 7])

// Obtiene el segundo elemento más grande en una matriz dada
function segundoMasGrande(arr) {
    // Verifica si la matriz tiene al menos dos elementos
    if (arr.length < 2) {
        return null; // Si no hay suficientes elementos, devuelve null
    } else {
        let max = arr[0]; // Inicializa la variable max con el primer elemento de la matriz
        let segundoMax = null; // Inicializa la variable segundoMax como null

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) { // Si el elemento actual es mayor que el máximo actual
                segundoMax = max; // Actualiza segundoMax con el valor máximo actual
                max = arr[i]; // Actualiza max con el valor actual
            } else if (arr[i] < max && (segundoMax == null || arr[i] > segundoMax)) { // Si el elemento actual es menor que el máximo actual y aún no se ha encontrado un segundo máximo
                segundoMax = arr[i]; // Actualiza segundoMax con el valor actual
            }
        }
        return segundoMax; // Devuelve el segundo máximo encontrado
    }
}
segundoMasGrande([42, 1, 4, Math.PI, 7])


const ElementoHastaElFinal = (arr, n) => {
    // Obtenemos el índice del último elemento
    const lastIndex = arr.length - 1;
    // Obtenemos el índice del elemento que está a N lugares desde el último
    const targetIndex = lastIndex - n;
    // Si el índice es menor que cero, la matriz es demasiado corta, retornamos null
    if (targetIndex < 0) {
        return null;
    }
    // Retornamos el elemento correspondiente al índice
    return arr[targetIndex];
}

ElementoHastaElFinal([5, 2, 3, 6, 4, 9, 7], 3)

// Esta función devuelve el n-ésimo elemento más grande de una matriz.
function N_esimo(arr, n) {
    // Devuelve null si la matriz es demasiado corta o si se solicita el 0-ésimo elemento más grande
    if (n <= 0 || arr.length < n) {
        return null;
    }

    let largest = null; // Inicializa la variable para el elemento más grande
    let secondLargest = null; // Inicializa la variable para el segundo elemento más grande

    // Itera a través de la matriz
    for (let num of arr) {
        // Si el elemento actual es mayor que el elemento más grande actual,
        // actualiza las variables para el segundo elemento más grande y el elemento más grande
        if (largest === null || num > largest) {
            secondLargest = largest;
            largest = num;
            // Si el elemento actual es mayor que el segundo elemento más grande actual,
            // actualiza la variable para el segundo elemento más grande
        } else if (secondLargest === null || num > secondLargest) {
            secondLargest = num;
        }
    }

    // Si n es igual a 2, devuelve el segundo elemento más grande,
    // de lo contrario, llama a la función de forma recursiva con n reducido en 1
    return (n === 2) ? secondLargest : N_esimo(arr, n - 1);
}

N_esimo([1, 20, 3, 40, 7, 10, 15], 4)

