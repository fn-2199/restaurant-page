function generateMenu() {
    const article = document.createElement('article');
    article.setAttribute('id', 'menuPage');
    article.classList.add('sub-bg');
    
    const p = document.createElement('p');
    p.textContent = "This is the menu page."

    article.append(p);

    return article;
}

export default generateMenu;