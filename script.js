// ========== API CONFIGURATION ========== //
// Endpoints for fetching popular movies and search results
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a72e216c5357ebed7dfd9c99266d35b&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'; // Base URL for movie posters
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=3a72e216c5357ebed7dfd9c99266d35b&query=";

// ========== DOM ELEMENTS ========== //
const main = document.getElementById("section"); // Main content container
const form = document.getElementById("form");    // Search form
const search = document.getElementById("query"); // Search input field

// ========== INITIAL LOAD ========== //
returnMovies(APILINK); // Load popular movies on first page load

// ========== CORE FUNCTION: FETCH & DISPLAY MOVIES ========== //
function returnMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then(function(data) {
      console.log(data.results); // Debug: Log raw API response
      
      // Clear previous results (except during initial load)
      main.innerHTML = ''; // [Note: This is missing here but present in search]

      data.results.forEach(element => {
        // Create DOM elements
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');
        
        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');
        
        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        // Movie poster image
        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');
        image.src = IMG_PATH + element.poster_path; // Build full image URL

        // Movie title
        const title = document.createElement('h3');
        title.setAttribute('id', 'title');
        title.innerHTML = `${element.title}`; // Insert movie title

        // Center-align image
        const center = document.createElement('center');
        center.appendChild(image);

        // Build card structure
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        // Add to main container
        main.appendChild(div_row);
      });
    });
}

// ========== SEARCH HANDLING ========== //
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  main.innerHTML = ''; // Clear current movies

  const searchItem = search.value;
  
  if(searchItem) {
    // Fetch movies matching search query
    returnMovies(SEARCHAPI + searchItem);
    search.value = ""; // Reset search input
  }
});