export const discounts = {
    calculate
}

function calculate(books) {
    if(new Date().getDay() === 1 || new Date().getDay() === 6) {
        const discount = 0.3
        const discountBooks = books
        .map(book => { return { ...book, preco: book.preco - book.preco * discount}})
        return discountBooks;
    }
    return books;
}