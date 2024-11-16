// Déclaration de l'API Read Access Token
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGVhMWIwZjYwNTNmM2NiYmM4MTY2MDExMjFlM2IzNCIsIm5iZiI6MTczMTA4MTg2Ny4xMjE5OTQzLCJzdWIiOiI2NzI4YzhmMDU5MTgxMzdjZmMzOWJkMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TjJX15tHCdG_gjk4OD8cHfj10KoCO_nIq1TJ_XjEtBM";

// URL de base pour TMDB
const BASE_URL = "https://api.themoviedb.org/3";

// En-têtes pour l'authentification
const headers = {
  Authorization: `Bearer ${API_TOKEN}`, // Utilise le token là
};

const input = document.querySelector(".search input ");
const btn = document.querySelector(".search button");
const container1 = document.querySelector(".splide .splide_list");
const container2 = document.querySelector(".splide1 .splide_last");
const container3 = document.querySelector(".splide2 .splide_genre");

//library of genres by id (less troublesome to create a collection)
function getGenreName(id) {
  const genres = {
    35: "Comedy",
    18: "Drama",
    28: "Action",
    10749: "Romance",
    14: "Fantasy",
    16: "Animation",
    12: "Adventure",
    80: "Crime",
    99: "Documentary",
    10751: "Family",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  return genres[id] || "Unknown Genre"; //listed genre or in case its not in the list ; "unknown"
}

btn.addEventListener("click", () => {
  const query = input.value.trim();
  fetchSearch(query);
});

const fetchSearch = async (query) => {
  const respons = await fetch(`${BASE_URL}/search/movie?query=${query}`, {
    headers,
  });
  const data = await respons.json();
  searchResults(data.results);
};
fetchSearch("inception");

const fetchLastest = async () => {
  const respons = await fetch(`${BASE_URL}/movie/latest`, { headers });
  const data = await respons.json();
  lastestResults(data);
};

const fetchGenre = async () => {
  const respons = await fetch(`${BASE_URL}/genre/movie/list`, { headers });
  const data = await respons.json();
  genreResults(data.genres);
};

const searchResults = (results) => {
  container1.innerHTML = "";

  results.forEach((result) => {
    const list = document.createElement("li");
    list.className = "splide_slide";

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500 ${result.poster_path}`;
    img.alt = result.original_title;

    list.appendChild(img);
    container1.appendChild(list);
  });
};
const lastestResults = (movie) => {
  container2.innerHTML = "";

  const list = document.createElement("li");
  list.className = "splide_slide";

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/w500 ${movie.poster_path}`;
  img.alt = movie.original_title;

  list.appendChild(img);
  container2.appendChild(list);
};

const genreResults = (genres) => {
  container3.innerHTML = "";

  genres.forEach((genre) => {
    const list = document.createElement("li");
    list.className = "splide_slide";

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500 ${genre.poster_path}`;
    img.alt = genre.original_title;

    const text = document.createElement("p");
    text.textContent = text.name;

    list.appendChild(img);
    container3.appendChild(list);
  });
};
