export const sort = {
    biggestPrice,
    smallerPrice
}

function biggestPrice(books) {
    return books.sort((a, b) => b.preco - a.preco)
}

function smallerPrice(books) {
    return books.sort((a, b) => a.preco - b.preco)
}