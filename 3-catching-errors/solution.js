const url = "https://.typicode.com/todos/x";

fetch(url)
  .then((response) => {
    // won't be excuted, because error happens before
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error :" + response.status);
    }
  })
  .catch((error) => {
    console.log(error.toString());
  });
