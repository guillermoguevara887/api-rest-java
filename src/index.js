
async function getMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();
    const movies = data.results;
    console.log(movies);
    return movies;
}


async function rederMovies() {
    const movieTrending = await getMovies();
    let movieRender = "";
    movieTrending.forEach(element => {
        movieRender += `
        <div class= 'movie-container'>
            
            <img src= 'https://image.tmdb.org/t/p/w200${element.poster_path}' class="movie-poster">
            

        </div>
        
        `
    });

    document.getElementById('movie-card').innerHTML += movieRender;

}

async function rederCategory() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();
    const genre = data.genres;
    let cateRender = "";
    genre.forEach(element => {
        if (element.name != 'War' && element.name != 'History' && element.name != 'Documentary' && element.name != 'Music' && element.name != 'Western' && element.name != 'Mystery' && element.name != 'TV Movie' && element.name != 'Family' && element.name != 'Fantasy' && element.name != 'Animation' && element.name != 'Adventure' && element.name != 'Crime') {
            cateRender += `
            <div class= 'genre-container'>
                <h3>${element.name}</h3>
            </div>
        
        `
        }
    });

    document.getElementById('genre-card').innerHTML += cateRender;

}
rederMovies();
rederCategory();







