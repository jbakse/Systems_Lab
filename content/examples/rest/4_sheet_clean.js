console.log('Hello, Sheet!');

// update on dom load
window.onload = requestJSON;

// update every 10 seconds
setInterval(requestJSON, 10000);

// request data from google sheets
function requestJSON() {
  fetch('https://spreadsheets.google.com/feeds/list/1e5lwamCY3ieZ7vWm6n9hn0UfYvjZrSBOtMWtwd5MwKw/default/public/values?alt=json')
    .then(response => response.json())
    .then(gotJSON);
}

// recieve response from google sheets
function gotJSON(json) {
  console.log('Update Data');
  const entries = json.feed.entry;

  // get the list
  const studentList = document.getElementById('students');

  // clear existing items
  studentList.innerHTML = '';

  // add new items from JSON
  for (const entry of entries) {
    // alias data
    const first = entry.gsx$firstname.$t;
    const last = entry.gsx$lastname.$t;
    const github = entry.gsx$githubname.$t;

    // build li w/ template
    const newLi = document.createElement('li');
    newLi.innerHTML = `<a href="http://github.com/${github}">${first} ${last}</a>`;
    studentList.appendChild(newLi);
  }
}
