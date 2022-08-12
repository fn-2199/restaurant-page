import Map from './assets/images/map.png';

const contactObj = {
    address: {street: "189 The Grove Drive", cityZip: "Los Angeles, CA 90036"},
    number: '(777) 420-6969',
    schedule: 'Open Everyday 11AM - 8PM',
    email: 'restaurant@handfull.com'
}

function generateContact() {
    const article = document.createElement('article');
    article.id = "contactPage";
    article.classList.add('sub-bg');

    const contactInfo = document.createElement('div');

    const location = document.createElement('h3');
    location.textContent = 'Location';
    const locationStreet = document.createElement('p');
    locationStreet.textContent = contactObj.address.street;
    const locationCityZip = document.createElement('p');
    locationCityZip.textContent = contactObj.address.cityZip;

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


    const map = document.createElement('div');
    const mapImg = new Image();
    mapImg.src = Map;
    mapImg.alt = "Location of handfull restaurant";
    mapImg.id = "map";

    map.appendChild(mapImg);
    contactInfo.append(location, locationStreet, locationCityZip, hours, hoursInfo, phoneEmail, phoneInfo, emailInfo);
    article.append(contactInfo, map);

    return article;
}

export {contactObj, generateContact as CONTACT};