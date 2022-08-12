import grilledChicken from './assets/images/grilledChicken.jpg';
import lechonKawali from './assets/images/lechonKawali.jpg';
import chickenBBQ from './assets/images/chickenBBQ.jpg';
import longanisa from './assets/images/longanisa.jpg';
import tocino from './assets/images/tocino.jpg';
import grilledLiempo from './assets/images/grilledLiempo.jpg';
import porkBBQ from './assets/images/porkBBQ.jpg';
import hipon from './assets/images/hipon.jpg';
import tahong from './assets/images/tahong.jpg';
import chickenAdobo from './assets/images/chickenAdobo.jpg';


const entreesItem = (imageSrc, foodName) => {
    return {imageSrc, foodName}
}

function generateMenu() {
    let entreesItemsArray = [entreesItem(grilledChicken, "Grilled Chicken Inasal"), entreesItem(lechonKawali, "Lechon Kawali/Deep Fried Pork"), entreesItem(chickenBBQ, "Filipino Chicken BBQ"), entreesItem(longanisa, "Longanisa Filipino Sausage"), entreesItem(tocino, "Tocino/Sweet Garlic Pork"), entreesItem(grilledLiempo, "Grilled Liempo/Grilled Pork Belly"), entreesItem(porkBBQ, "Pork BBQ"), entreesItem(hipon, "Hipon/Whole Shrimp"), entreesItem(tahong, "Tahong/Mussels"), entreesItem(chickenAdobo, "Chicken Adobo")];

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

    const entreesContainer = document.createElement('div');
    entreesContainer.classList.add('entrees-container');

    entreesItemsArray.forEach((entree) => {

        let entreeElement = document.createElement('div');
        entreeElement.classList.add('entree-element');

        let entreeName = document.createElement('h4');
        let entreeImg = new Image();
        entreeImg.src = entree.imageSrc;
        entreeImg.classList.add('food-image');
        entreeName.textContent = entreeImg.alt = entree.foodName;

        entreeElement.append(entreeImg, entreeName);
        entreesContainer.appendChild(entreeElement);
    })
    
    article.append(includedTitle, includedItems, entreesTitle, entreesItems, entreesContainer);

    return article;
}

export default generateMenu;