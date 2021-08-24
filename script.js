//TMDB 

const API_KEY = '1cf50e6348dc270629e802686245c8';
const BASE_URL = 'https://api.themoviedb.org/3/'




function getMovies(url)
{
    fetch(url).then(res=> res.json()).then(data =>{
        console.log(data);

        showMovies(data);
    })
}

function showMovies(data) {
    data.forEach(movie =>{
        const moviel = document.createElement('div');
        moviel.classList.add('movie');
        movieEl.innerHTML = '
         '
    })
}