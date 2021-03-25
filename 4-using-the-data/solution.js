const url = "https://randomuser.me/api/?inc=gender,name,picture&results=10";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.status);
    }
  })
  .then((dataObject) => {
    dataObject.results.forEach((person) => {
      const section = document.createElement("section");
      section.classList.add("person");
      const main = document.querySelector("main");
      const fullName = document.createElement("h2");
      fullName.textContent = `${person.name.first} ${person.name.last}`;
      const img = document.createElement("img");
      img.src = person.picture.medium;
      img.alt = `${person.name.first} ${person.name.last}`;

      section.append(fullName);
      section.append(img);
      main.append(section);
    });
  });
