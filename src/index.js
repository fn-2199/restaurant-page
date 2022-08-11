import './style.css';
import HOME from './home';
import MENU from './menu';
import RESERVE from "./reserve";
import {contactObj, CONTACT} from "./contact";

const content = document.querySelector('.content');

const generateFrontPage = function() {
    const navArray = ['HOME', 'MENU', 'RESERVE', 'CONTACT'];
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    for (let page of navArray) {
        const li = document.createElement('li');
        li.textContent = page;
        ul.appendChild(li);
    }

    nav.appendChild(ul);

    const footer = document.createElement('footer');

    for (let info of Object.values(contactObj)) {
        const p = document.createElement('p');
        p.textContent = info;
        footer.appendChild(p);
    }

    content.append(nav, HOME(), footer)

}();

const navLinks = document.querySelectorAll('nav > ul > li')
navLinks.forEach((nav) => {nav.addEventListener("click", function() {
    //Removes active page element
    (document.querySelector('.content').firstChild.nextSibling).remove();

    //Generates selected page
    switch (nav.textContent) {
        case 'HOME':
            content.insertBefore(HOME(), document.querySelector('footer'));
            break;
        case 'MENU':
            content.insertBefore(MENU(), document.querySelector('footer'));
            break;
        case 'RESERVE':
            content.insertBefore(RESERVE(), document.querySelector('footer'));
            break;
        case 'CONTACT':
            content.insertBefore(CONTACT(), document.querySelector('footer'));
            break;
    }

})})