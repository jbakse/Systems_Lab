console.log('Hello, DOM!');

window.onload = main;

function main() {
  console.log('Hello, main()!');
  const studentList = document.getElementById('students');
  const newLi = document.createElement('li');
  newLi.innerHTML = '<a href="#">Mr. Javascript</a>';
  studentList.appendChild(newLi);
}
