const titleObj = {
    title: 'handfull',
    subtitle: "traditional filipino dining"
}

function generateHome() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2')

    h1.textContent = titleObj.title;
    h2.textContent = titleObj.subtitle;

    header.append(h1, h2);

    return header;
}

export default generateHome;