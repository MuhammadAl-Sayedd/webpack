import '../bio/biostyle.scss';

function component() {
    const element =  document.createElement('div');
    element.innerHTML = 'yooo!'
    element.classList.add('myDiv')
    return element;
};
document.body.appendChild(component())