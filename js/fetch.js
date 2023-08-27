/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) // .json() is not similar but close to JSON.parse()
      .then(json => console.log(json)) */

/* const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
.then(res => res.json())
.then(data => console.log(data)) */
function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}