

function generateMenu() {
    const article = document.createElement('article');
    article.id= "menuPage";
    article.classList.add('sub-bg');

    const includedTitle = document.createElement('h3');
    includedTitle.textContent = "All Boodle Fights Include"
    
    const includedItems = document.createElement('p');
    includedItems.innerHTML = "Lumpia, ensaldang kamatis, white rice, assorted dipping sauces, and garnishes. <br> Garnishes: fresh mangos & oranges, fried garlic crumble, and scallions.";

    const entreesTitle = document.createElement('h3');
    entreesTitle.textContent = "Boodle Fight Entrees";

    const entreesItems = document.createElement('p');
    entreesItems.textContent = "Combination of 6 items total from the following. (Menu subject to change)"

    article.append(includedTitle, includedItems, entreesTitle, entreesItems);

    return article;
}

export default generateMenu;