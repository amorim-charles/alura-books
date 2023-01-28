export const reduce = {
    totalPrice
}

function totalPrice(books) {
    return books.reduce((acc, book) => acc + book.preco, 0).toFixed(2)
}