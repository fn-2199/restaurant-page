import {entreesItemsArray} from "./menu";

const formElements = (camelCase, stringLabel, inputType) => {
    return {camelCase, stringLabel, inputType}
}

let formArray = [formElements('firstName', "First Name", 'text'), formElements('lastName', "Last Name", 'text'), formElements('phoneNumber', "Phone Number", 'tel'), formElements('email', "Email", 'email'), formElements('numofPpl', "Number of Party", 'number'), formElements('dateTime', "Date & Time", 'datetime-local')];

function generateReserve() {
    const form = document.createElement('form');
    form.classList.add('sub-bg');
    form.id = "reservation";
    form.action = "#";
    form.method = "post";

    const h3 = document.createElement('h3');
    h3.textContent = 'Reservation Form';

    form.append(h3);
    
    for (let element of formArray) {
        const div = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', `${element.camelCase}`);

        const span = document.createElement('span');
        span.textContent = element.stringLabel;

        const strong = document.createElement('strong');
        const abbr = document.createElement('abbr');
        abbr.title = 'required';
        abbr.textContent = '*';

        const input = document.createElement('input');
        input.type = element.inputType;
        input.id = input.name = element.camelCase;
        input.setAttribute('required', '');

        strong.appendChild(abbr);
        label.append(span, strong);
        div.append(label, input);
        form.appendChild(div);
    }

    for (let entree of entreesItemsArray) {
        const label = document.createElement('label');
        label.setAttribute('for', `${entree.camelCase}`);
        label.textContent = entree.foodName;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'entreeItem';
        input.id = input.value = entree.camelCase;

        form.append(input, label)
    }

    // Create checkbox fieldset

    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');

    return form;
}

export default generateReserve;