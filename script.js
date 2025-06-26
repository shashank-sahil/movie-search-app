const API_KEY = "your_api_key"; // Replace with your OMDb API key

function searchMovie() {
  const query = document.getElementById("search-input").value;

  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    .then(response => response.json())
    .then(data => {
      const results = document.getElementById("movie-results");
      results.innerHTML = "";

      if (data.Response === "True") {
        data.Search.forEach(movie => {
          const movieElement = document.createElement("div");
          movieElement.classList.add("movie");
          movieElement.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}" width="150"/>
          `;
          results.appendChild(movieElement);
        });
      } else {
        results.innerHTML = `<p>No results found for "${query}"</p>`;
      }
    })
    .catch(error => {
      console.error("Error fetching movie data:", error);
    });
}

