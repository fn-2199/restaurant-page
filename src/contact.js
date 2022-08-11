const contactObj = {
    address: '42 Wallaby Way Sydney, Australia',
    number: '(777) 420-6969',
    schedule: 'Open Everyday 11AM - 8PM',
    email: 'restaurant@handfull.com'
}

function generateContact() {
    const article = document.createElement('article');
    article.setAttribute('id', 'contactPage');
    article.classList.add('sub-bg');

    const contactInfo = document.createElement('div');

    const location = document.createElement('h3');
    location.textContent = 'Location';
    const locationInfo = document.createElement('p');
    locationInfo.textContent = contactObj.address;

    const hours = document.createElement('h3');
    hours.textContent = 'Hours';
    const hoursInfo = document.createElement('p');
    hoursInfo.textContent = contactObj.schedule;

    const phoneEmail = document.createElement('h3');
    phoneEmail.textContent = 'Contact';
    const phoneInfo = document.createElement('p');
    const emailInfo = document.createElement('p');
    phoneInfo.textContent = contactObj.number;
    emailInfo.textContent = contactObj.email;


    const interactiveMap = document.createElement('div');
    interactiveMap.setAttribute('id', 'map');

    contactInfo.append(location, locationInfo, hours, hoursInfo, phoneEmail, phoneInfo, emailInfo);
    article.append(contactInfo, interactiveMap);

    return article;
}

export {contactObj, generateContact as CONTACT};