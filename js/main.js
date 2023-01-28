import { controller } from "./modules/controller.js"
import { view } from "./modules/view.js";
import { discounts } from "./modules/discounts.js";
import { filters } from "./modules/filters.js";
import { sort } from "./modules/sort.js";
import { reduce } from "./modules/reduce.js"

let books = await controller.getBooks();

document
    .querySelectorAll("[data-books]")
    .forEach(button => button
        .addEventListener("click", category => filterBooks(category.target.dataset.books)));

document
    .querySelector("[data-available]")
    .addEventListener("click", () => filterBooks());

document
    .querySelectorAll("[data-price]")
    .forEach(button => button
        .addEventListener("click", category => sortBooks(category.target.dataset.price)))

calculateDiscounts()

showBooks(books)

function calculateDiscounts() {
    books = discounts.calculate(books)
}

function showBooks(books, totalPrice) {
    view.showOnScreen(books, totalPrice)
}

function filterBooks(category) {
    let filtredBooks;

    if(category) {
        filtredBooks = filters.category(category, books) 
        showBooks(filtredBooks);
    } else {
        filtredBooks = filters.available(books)
        const totalPrice = reduce.totalPrice(filtredBooks)
        showBooks(filtredBooks, totalPrice);
    }
}

function sortBooks(order) {
    let sortBooks;
    order === "biggest" ? sortBooks = sort.biggestPrice(books) : order === "smaller" ? sortBooks = sort.smallerPrice(books) : 0
    console.log(sortBooks);
    showBooks(sortBooks)
}

//sort
//const priceButton = document.querySelector("[data-price]")
//  priceButton.addEventListener("click", "")
