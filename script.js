const API_KEY = "862d132b"; // Your OMDb API key

// Fetch movies
async function fetchMovies(query) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data.Search; // returns array of movies
}

// Render cards
function renderMovies(movies) {
  const container = document.getElementById("movie-container");
  container.innerHTML = ""; // Clear previous results

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.style.backgroundImage = `url(${movie.Poster !== "N/A" ? movie.Poster : "default.jpg"})`;
    card.innerHTML = `<h3>${movie.Title}</h3>`;
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

// Event listener
document.getElementById("search_button").addEventListener("click", handleSearch);
