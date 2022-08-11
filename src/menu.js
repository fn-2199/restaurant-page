function generateMenu() {
    const article = document.createElement('article');

    const p = document.createElement('p');
    p.textContent = "This is the menu page."

    article.append(p);

    return article;
}

export default generateMenu;