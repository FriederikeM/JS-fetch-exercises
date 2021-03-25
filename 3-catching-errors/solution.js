const url = "https://.typicode.com/todos/x";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error :" + response.status);
    }
  })
  .catch((error) => {
    console.log(error.toString());
  });
