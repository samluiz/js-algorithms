// busca linear
function findElement(arr, titulo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].titulo === titulo) {
            return arr[i]
        }
    }
    return null
}

// execução

book = {
    titulo: "title_1",
    autor: "author_1",
    ano: 2009
}

book2 = {
    titulo: "title_2",
    autor: "author_2",
    ano: 2010
}

book3 = {
    titulo: "title_3",
    autor: "author_3",
    ano: 2011
}

console.log(findElement([book, book2, book3], "title_2"))