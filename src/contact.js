const contactObj = {
    address: '42 Wallaby Way Sydney, Australia',
    number: '(777) 420-6969',
    schedule: 'Open Everyday 11AM - 8PM'
}

function generateContact() {
    const article = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = "This is the contact page."

    article.append(p);

    return article;
}

export {contactObj, generateContact as CONTACT};