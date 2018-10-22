console.log('Hello, DOM!');

window.onload = main;

function main() {
  console.log('Hello, main()!');
  const studentList = document.getElementById('students');
  const newLi = document.createElement('li');
  newLi.innerHTML = "<a href=\"#\">Mr. Javascript</a>";
  studentList.appendChild(newLi);
}


console.log('Hello, DATA!');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(gotJSON);


function gotJSON(json) {
  console.log('Hello, gotJSON()!');
  console.log(json);
  console.log(json.title);
  console.log(`My id is ${json.id}!`);
}