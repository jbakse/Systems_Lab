console.log('Hello, DOM!');
console.log('document', document);

// since this script is linked from the head, it will be run before the browser loads the rest of the page
// the DOM won't be ready, and .animal-1 won't exist yet.
const animal = document.getElementById('animal-1');
console.log('animal', animal);


// the window.onload event is fired when the DOM is ready.
// animal-1 should be on the DOM when the event is fired.
window.onload = main;

function main() {
  // reading values from the dom
  console.log('DOM Loaded!');
  console.log('document', document);
  const container = document.getElementById('container');
  console.log('container', container);
  const animal = document.getElementById('animal-1');
  console.log('animal', animal);
  console.dir(animal);
  console.log('animal.id', animal.id);
  console.log('animal.className', animal.className);
  console.log('animal.classList', animal.classList);
  console.log('animal.innerText', animal.innerText);

  console.log('animal.style', animal.style);
  console.log('animal.style.color', animal.style.color);
  console.log('window.getComputedStyle(animal)', window.getComputedStyle(animal));
  console.log('window.getComputedStyle(animal).color', window.getComputedStyle(animal).color);


  // altering the dom
  // animal.innerText = 'frog';
  // animal.classList.add('fancy');
  // animal.style.color = 'blue';

  // adding to the dom

  // const myH1 = document.createElement('h1');
  // myH1.innerText = 'Hello, H2!';
  // container.appendChild(myH1);

  // removing things from the dom
  // const h1s = document.getElementsByTagName('h1');
  // console.log('h1s', h1s);
  // console.log('h1s[0]', h1s[0]);
  // console.log('h1s[1]', h1s[1]);
  // h1s[0].remove();


  // listening to events
  // container.addEventListener('click', onMouseEnter);
}

function onMouseEnter(event) {
  console.log('onMouseEnter', this, event);
  this.style.backgroundColor = pick(['#FCC', '#CFC', '#CCF']);

  const animal1 = document.getElementById('animal-1');
  const animal2 = document.getElementById('animal-2');

  animal1.innerText = pick(['snail', 'rabbit', 'bird']);
  animal1.style.color = pick(['#800', '#080', '#008']);
  animal2.innerText = pick(['hippo', 'kangaroo', 'bison']);
  animal2.style.color = pick(['#800', '#080', '#008']);

}

function pick(a) {
  const index = Math.floor(Math.random() * a.length);
  return a[index];
}
