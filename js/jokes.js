const randomJoke = document.querySelector(".random-joke");
const categoriesUl = document.querySelector(".div ul");
const button = document.querySelector(".btn");
const jokes = document.querySelector(".jokes");
const jok=document.querySelector(".jok")

function fetchRandomJokes() {
  const url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const jokes = document.createElement("div");
      jokes.src = data.message;
      console.log(data);
      randomJoke.textContent = data.value;
    });
}
fetchRandomJokes();

function fetchCategoryJokes() {
  const url = "https://api.chucknorris.io/jokes/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((category) => {
        const list = document.createElement("li");

        list.classList.add("category");
        list.textContent = category;
        categoriesUl.append(list);
      });
      console.log(data);
    });
}

fetchCategoryJokes();

function fetchCategoryJoke(category) {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        jok.textContent=data.value
    });
}

categoriesUl.addEventListener("click", function (e) {
  if (e.target.classList.contains("category")) {
    fetchCategoryJoke(e.target.textContent);
  }
});
