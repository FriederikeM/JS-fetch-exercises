const url = "https://jsonplaceholder.typicode.com/todos/x";

fetch(url).then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    console.log(response.status);
  }
});
