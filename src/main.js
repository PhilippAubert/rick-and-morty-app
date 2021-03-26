console.clear();

const url = "https://rickandmortyapi.com/api/character";

const selectButton = document.querySelector(".dropdown-menu");

const loadButton = document.querySelector(".button");
loadButton.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })

    .catch((error) => {
      console.log(error.toString());
      console.log(error);
    });

  const apiGET = fetch(url);

  apiGET
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        h1.textContent = response.status;
      }
    })
    .then((character) => {
      character.results.forEach((residents) => {
        const main = document.querySelector("main");

        const section = document.createElement("section");
        section.classList.add("content");
        const textFrame = document.createElement("div");
        textFrame.classList.add("text-container");
        const name = document.createElement("h2");
        name.textContent = `${residents.name}`;
        name.classList.add("headline");
        const status = document.createElement("p");
        status.textContent = `STATUS: ${residents.status}`;
        status.classList.add("status");
        const location = document.createElement("p");
        location.textContent = `LOCATION: ${residents.location.name}`;
        location.classList.add("location");
        const img = document.createElement("img");
        img.classList.add("photo");
        img.src = residents.image;
        img.alt = `${residents.name}`;

        main.append(section);
        section.append(img);
        section.append(textFrame);
        textFrame.append(name);
        textFrame.append(status);
        textFrame.append(location);
      });
    });
});
