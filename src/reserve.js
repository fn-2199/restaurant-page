function generateReserve() {
    const article = document.createElement('article');

    const p = document.createElement('p');
    p.textContent = "This is the reservation page."

    article.append(p);

    return article;
}

export default generateReserve;