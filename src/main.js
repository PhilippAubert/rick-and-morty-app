console.clear();

const selectButton = document.querySelector(".dropdown-menu");

let url = "https://rickandmortyapi.com/api/character/";

if (selectButton.value === "alive") {
  url = `https://rickandmortyapi.com/api/character?status=alive`;
}
if (selectButton.value === "dead") {
  url = "https://rickandmortyapi.com/api/character?status=dead";
}
if (selectButton.value === "unknown") {
  url = "https://rickandmortyapi.com/api/character?status=unknown";
}

const loadButton = document.querySelector(".button");

loadButton.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("ERROR!");
      }
    })

    .then((data) => {
      console.log(data.results);

      data.results.forEach((card) => {
        const main = document.querySelector("main");
        const section = document.createElement("section");
        section.classList.add("content");
        const textFrame = document.createElement("div");
        textFrame.classList.add("text-container");
        const name = document.createElement("h2");
        name.textContent = `${card.name}`;
        name.classList.add("headline-text");
        const status = document.createElement("p");
        status.textContent = `${card.status}`;
        status.classList.add("status-text");

        if (status.textContent === "Alive") {
          section.classList.add("text-container-alive");
        } else if (status.textContent === "Dead") {
          section.classList.add("text-container-dead");
        } else {
          section.classList.add("text-container-unknown");
        }

        const location = document.createElement("p");
        location.textContent = `${card.location.name}`;
        location.classList.add("location-text");
        const img = document.createElement("img");
        img.classList.add("photo");
        img.src = card.image;
        img.alt = `${card.name}`;

        main.append(section);
        section.append(img);
        section.append(textFrame);
        textFrame.append(name);
        textFrame.append(status);
        textFrame.append(location);

        loadButton.addEventListener("click", () => {
          const removeCards = document.querySelector("section");
          removeCards.forEach((card) => card.remove());
        });
      });
    })
    .catch((error) => {
      console.log(error.toString());
    });
});
