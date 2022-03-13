import '../header/headerstyle.css'
const element = document.createElement('header')

element.innerHTML = 'this is webpack demo'
element.classList.add('info')

document.body.appendChild(element);

import photo from "../../assets/webpack_logo.png"

const image = document.createElement('img')
image.classList.add('img')
image.src = photo
image.style.width = '50px';
image.style.height = '50px';
element.appendChild(image);

