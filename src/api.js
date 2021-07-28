
const fetchData = page => fetch(`const url = 'https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10'`).then(res => res.json())