const animal1 = document.getElementById('animal-1');
animal1.innerHTML = 'I <i>used</i> the dom!';

document.getElementById('animal-2').innerText = "instructor";


const myH1 = document.createElement('h1');
myH1.innerText = 'Hello, H1!';
const headline = document.getElementById('headline');
headline.insertAdjacentElement('afterend', myH1);

myH1.remove();


const container = document.getElementById('container');
container.addEventListener('click', justinsClickCounter);

let currentCount = 0;

function justinsClickCounter(event) {
    console.log('click', currentCount++);
    animal1.innerText = "cheetah";
}