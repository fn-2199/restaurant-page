import './style.css';
import HOME from './home';
import MENU from './menu';
import RESERVE from "./reserve";
import {contactObj, CONTACT} from "./contact";

//Make imported functions global
window.HOME = HOME;
window.MENU = MENU;
window.RESERVE = RESERVE;
window.CONTACT = CONTACT;

const generateFrontPage = function() {
    const content = document.querySelector('.content');

    //Create navigation
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const navArray = ['HOME', 'MENU', 'RESERVE', 'CONTACT'];
    for (let page of navArray) {
        const li = document.createElement('li');
        li.textContent = page;
        li.onclick = activatePage;
        ul.appendChild(li);
    }

    nav.appendChild(ul);

    //Create footer
    const footer = document.createElement('footer');
    
    for (let info of Object.values(contactObj)) {
        const p = document.createElement('p');
        p.textContent = info;
        footer.appendChild(p);
    }

    content.append(nav, HOME(), footer)
}();

function activatePage() {
    //Remove current active page
    (document.querySelector('.content').firstChild.nextSibling).remove();
    //Display new selected page
    document.querySelector('.content').insertBefore(window[`${this.textContent}`](), document.querySelector('footer'));
}