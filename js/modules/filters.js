export const filters = {
    category,
    available
}

function category(filter, books) {
    return books.filter(book => book.categoria === filter)
}

function available(books) {
    return books.filter(book => book.quantidade > 0)
}
