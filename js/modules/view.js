export const view = {
    showOnScreen
}

function showOnScreen(books, totalPrice) {
    totalPrice ? addSectionTotalPrice(totalPrice) : removeSectionTotalPrice();

    const sectionBooks = document.getElementById("livros")

    removeSectionBooks(sectionBooks)

    books.forEach(book => {
        const divBooks = document.createElement("div")
        divBooks.classList.add("livro")

        const img = document.createElement("img")
        img.classList.add("livro__imagens")
        img.src = book.imagem;
        img.alt = book.alt;

        const h2 = document.createElement("h2")
        h2.classList.add("livro__titulo")
        h2.textContent = book.titulo;

        const pDescription = document.createElement("p")
        pDescription.classList.add("livro__descricao")
        pDescription.textContent = book.autor;

        const pPrice = document.createElement("p")
        pPrice.classList.add("livro__preco")
        pPrice.textContent = book.preco.toFixed(2);

        const divTags = document.createElement("div")
        divTags.classList.add("tags")

        const spanTags = document.createElement("span")
        spanTags.classList.add("tag")
        spanTags.textContent = book.categoria

        addSectionBooks(sectionBooks, divBooks, img, h2, pDescription, pPrice, divTags, spanTags)
    });
}

function addSectionTotalPrice(totalPrice) {
    const sectionTotalPrice = document.getElementById("valor_total_livros_disponiveis")
    const divTotalPrice = document.createElement("div")
    divTotalPrice.classList.add("livros__disponiveis")

    const pTotalPrice = document.createElement("p")
    pTotalPrice.textContent = `Todos os livros disponíveis por R$ ${totalPrice}`
    sectionTotalPrice.appendChild(divTotalPrice)
    divTotalPrice.appendChild(pTotalPrice)
}

function removeSectionTotalPrice() {
    document.getElementById("valor_total_livros_disponiveis").textContent = ""
}

function addSectionBooks(sectionBooks, divBooks, img, h2, pDescription, pPrice, divTags, spanTags) {
    sectionBooks.appendChild(divBooks)
    divBooks.appendChild(img)
    divBooks.appendChild(h2)
    divBooks.appendChild(pDescription)
    divBooks.appendChild(pPrice)
    divBooks.appendChild(divTags)
    divTags.appendChild(spanTags)
}

function removeSectionBooks(sectionBooks) {
    sectionBooks.textContent = ""
}
