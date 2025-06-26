const API_KEY = "862d132b"; // Your OMDb API key
initKeys = ["dhoom"];
// Fetch movies
async function fetchMovies(query) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data.Search; // returns array of movies
}

// Render cards
function renderMovies(movies) {
  const container = document.getElementById("movie-container");
  container.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.style.backgroundImage = `url(${movie.Poster !== "N/A" ? movie.Poster : "default.jpg"})`;

    card.innerHTML = `<h3>${movie.Title}</h3>`;

    // Navigate to details.html with the movie's imdbID
    card.addEventListener("click", () => {
      window.location.href = `details.html?id=${movie.imdbID}`;
    });

    container.appendChild(card);
  });
}


// Search handler
async function handleSearch() {
  const input = document.getElementById("search-input").value.trim();
  if (input) {
    const movies = await fetchMovies(input);
    if (movies) renderMovies(movies);
  }
}

async function fillupCards(initKeys) {
  const containers = document.getElementsByClassName("movie-card");

  for (let i = 0; i < containers.length; i++) {
    let query = initKeys[i];
    let movies = await fetchMovies(query); // assumes fetchMovies returns an array of movie objects

    if (movies && movies.length > 0) {
      containers[i].style.backgroundImage = `url(${movies[0].Poster})`;
      containers[i].style.backgroundSize = "cover";
      containers[i].style.backgroundPosition = "center";
      containers[i].addEventListener("click", () => {
      window.location.href = `details.html?id=${movie.imdbID}`;
    });
    }
  }
}


fillupCards(initKeys);


// Event listener
document.getElementById("search_button").addEventListener("click", handleSearch);
