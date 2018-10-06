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
  const animal = document.getElementById('animal-1');
  console.log('animal', animal);
  console.dir(animal);
  console.log('animal.id', animal.id);
  console.log('animal.classList', animal.classList);
  console.log('animal.innerText', animal.innerText);


  // altering the dom
  //   animal.innerText = 'frog';
  //   animal.classList.add('fancy');

  // adding to the dom
  //   const container = document.getElementById('container');
  //   const myH1 = document.createElement('h1');
  //   myH1.innerText = 'Hello, H2!';
  //   container.appendChild(myH1);

  // removing things from the dom
//   const h1s = document.getElementsByTagName('h1');
//   console.log('h1s', h1s);
//   console.log('h1s[0]', h1s[0]);
//   console.log('h1s[1]', h1s[1]);
//   h1s[0].remove();

}

