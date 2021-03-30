const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://api.chucknorris.io/jokes/random", setHeader)
    .then((res) => res.json())
    .then((data) => {
      jokes.innerHTML = data.value;
    })
    .catch((error) => {
      console.log(error);
    });
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
