// Get joke

const button = document.querySelector(".get-joke-btn");
const jokeP = document.querySelector(".joke");

let url = "https://icanhazdadjoke.com";
var options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const getJoke = () => {
  fetch(url, options)
    .then((data) => data.json())
    .then((joke) => (jokeP.innerHTML = joke.joke))
    .catch((err) => alert("Something went wrong"));
};

button.addEventListener("click", getJoke);
getJoke();

// Background color

window.addEventListener("mousemove", (e) => {
  let x = (e.x / window.innerWidth) * 255;
  let y = (e.y / window.innerHeight) * 255;
  console.log(window.innerWidth);
  document.body.style.background = `rgba(${x}, ${y}, ${e.x - e.y}, 0.8)`;
});
