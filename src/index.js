import './style.css';

console.log("Hello world");

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello webpack';
    
    return element;
}
  
document.body.appendChild(component());
