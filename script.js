const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a72e216c5357ebed7dfd9c99266d35b&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=3a72e216c5357ebed7dfd9c99266d35b&query=";

const main= document.getElementById("section");
const form= document.getElementById("form");
const search= document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res=> res.json())
    .then(function(data)
    {   console.log(data.results);
        data.results.forEach(element=>{
            const div=document.createElement('div');

       });
    });

}