// BTN & Background

const button = document.querySelector(".get-joke-btn");
const jokeP = document.querySelector(".joke");

let url = "https://icanhazdadjoke.com"
var options = { 
    method: 'GET',
    headers: {
      "Accept" : "application/json" 
    }
  };

button.addEventListener("click", () => {
    fetch(url, options)
    .then(data => data.json())
    .then(joke => jokeP.innerHTML = joke.joke)
    .catch(err => alert("Something went wrong"))
})

window.addEventListener("mousemove", e => {
    let x = e.x / window.innerWidth * 255;
    let y = e.y / window.innerHeight * 255;

    // document.body.style.background = `rgba(${e.x / 4}, ${e.y / 4}, ${(e.x - e.y) / 4}, 0.8)`

    document.body.style.background = `rgba(${x}, ${y}, ${e.x - e.y}, 0.8)`
}
)

//init joke 

fetch(url, options)
.then(data => data.json())
.then(joke => jokeP.innerHTML = joke.joke)
.catch(err => alert("Something went wrong"))