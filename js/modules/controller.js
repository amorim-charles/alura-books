export const controller = {
    getBooks
}

async function getBooks() {
    const books = await fetch("./requisicao.json");
    return await books.json();
}
