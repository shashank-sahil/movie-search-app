const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=862d132b"; // Replace with your OMDb API key

async function fetchmovie() {
  const response = await fetch(API_KEY);
  const data = await response.json();
  console.log(data.Poster)
  
  const poster = document.getElementsByClassName("movie-card");

for( let i = 0 ; i < poster.length ; i++){
  poster[i].style.backgroundImage = `url(${data.Poster})`;
   poster[i].style.backgroundSize = "cover";
  poster[i].style.backgroundPosition = "center";

}
}
fetchmovie();

