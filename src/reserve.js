function generateReserve() {
    const form = document.createElement('form');
    form.classList.add('sub-bg');
    
    const p = document.createElement('p');
    p.textContent = "This is the reservation page."

    form.append(p);

    return form;
}

export default generateReserve;