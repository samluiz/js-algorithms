// busca linear
function count(arr) {
    frequencia = {}
    for (let i = 0; i < arr.length; i++) {
        if (!frequencia.hasOwnProperty(arr[i])) {
            frequencia[arr[i]] = 1
        } else {
            frequencia[arr[i]] += 1
        }
    }
    return frequencia
}

console.log(count([1, 2, 3, 3, 2, 8, 5, 3, 8]))