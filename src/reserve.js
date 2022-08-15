import {entreesItemsArray} from "./menu";

const formElements = (camelCase, stringLabel, inputType) => {
    return {camelCase, stringLabel, inputType}
}

const categoryElements = (title, array, camelCase) => {
    return {title, array, camelCase}
}

const basicInfoArray = [formElements('firstName', "First Name", 'text'), formElements('lastName', "Last Name", 'text'), formElements('phoneNumber', "Phone Number", 'tel'), formElements('email', "Email", 'email'), formElements('numOfPpl', "Number of Party", 'number'), formElements('dateTime', "Date & Time", 'datetime-local')];

const paymentInfoArray = [formElements('cardNumber', "Card Number", 'tel'), formElements('expirationDate', "Expiration Date", 'month'), formElements('cvv', "CVV", 'tel'), formElements('zipCode', "Card Zip Code", 'text')];

const formCategoryArray = [categoryElements("Basic Information", basicInfoArray, 'basic-info'), categoryElements("Entrees & Comments", entreesItemsArray, 'entrees-comments'), categoryElements("Payment Information", paymentInfoArray, 'payment-info')];

function generateReserve() {
    const form = document.createElement('form');
    form.classList.add('sub-bg');
    form.id = "reservation";
    form.action = "#";
    form.method = "post";

    const h3 = document.createElement('h3');
    h3.textContent = 'Reservation Form';
    form.appendChild(h3);

    formCategoryArray.forEach((category) => {
        const fieldset = document.createElement('fieldset');
        fieldset.id = category.camelCase;
        const legend = document.createElement('legend');
        legend.textContent = category.title;
        fieldset.append(legend);
        form.append(fieldset);

        if (category.title == 'Basic Information' || category.title == 'Payment Information') {
            for (let element of category.array) {
                const div = document.createElement('div');
    
                const label = document.createElement('label');
                label.textContent = element.stringLabel;
    
                const strong = document.createElement('strong');
                const abbr = document.createElement('abbr');
                abbr.title = 'required';
                abbr.textContent = '*';
    
                const input = document.createElement('input');
                input.type = element.inputType;
                input.name = element.camelCase;

                input.setAttribute('required', '');
    
                strong.appendChild(abbr);
                label.append(strong, input);
                div.append(label);
                fieldset.appendChild(div);
            }
        } else {
            const checkBoxContainer = document.createElement('div');

            const p = document.createElement('p');
            p.textContent = "Choose up to any six items for your Boodle Fight Service";
            
            for (let entree of category.array) {
                const label = document.createElement('label');
                const span = document.createElement('span');
                span.textContent = entree.foodName;
    
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'entreeItem';
                input.value = entree.camelCase;
    
                label.append(input, span);
                checkBoxContainer.appendChild(label);
            }

            const div = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = "Add-Ons/Comments/Requests/Allergies/Celebration";

            const textarea = document.createElement('textarea');
            textarea.name = 'comments';
            textarea.cols = '60';
            textarea.rows = '2';

            label.append(textarea);
            div.appendChild(label);
            fieldset.append(p, checkBoxContainer, div);

        }
        
    })

    const button = document.createElement('button');
    button.textContent = "Submit";
    form.appendChild(button);

    return form;
}

export default generateReserve;