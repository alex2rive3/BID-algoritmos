const pushToFront = (arr, number) => {
    console.log([number, ...arr])
}
pushToFront([1, 2, 3, 4, 5, 6, 7, 8], 33)

const popToFront = (arr) => {
    const [a, ...rest] = arr
    arr = rest
    console.log(`Primer elemento ${a}`)
    console.log(arr)
}
popToFront([1, 3, 2, 4, 5, 6, 8])

const insertAt = (arr, index, number) => {
    const aux = []
    for (let idx = 0; idx < arr.length; idx++) {
        if (idx === index) {
            aux[idx] = (number)
        } else {
            aux[idx] = arr[idx]
        }
    }
    console.log(arr)
    console.log(aux)
}
insertAt([2, 3, 4, 5, 6], 2, 99)
const removeAt = (arr, idx) => {
    const aux = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (index !== idx) {
            aux[index] = element
        }
    }
    console.log(arr)
    console.log(aux)
}
removeAt([4, 5, 6, 7, 8, 9], 1)

const removeDuplicado = (array) => {
    const clean = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const siguiente = array[index + 1];
        if (element !== siguiente) {
            clean[index] = element
        }
    }
}
