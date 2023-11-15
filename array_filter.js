function filter(arr, preco) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].preco > preco) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

product = {
    nome: "product_1",
    preco: 400,
    estoque: 49
}

product2 = {
    nome: "product_2",
    preco: 900,
    estoque: 32
}

product3 = {
    nome: "product_3",
    preco: 10,
    estoque: 70
}

console.log(filter([product, product2, product3], 20))