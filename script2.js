const APIURL2 = 'https://expressbuybd.com/wp-json/wc/v3/products?category=250';

const APIURL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
// const IMGPATH = ] ;
const SEARCHAPI = 'https://expressbuybd.com/wp-json/wc/v3/products?search=';
const key =
    '&consumer_key=ck_29618b80e61c705dace0c49ceb724a3959df5b50&consumer_secret=cs_80cd666549222f2d3efb376bade63960ab3ce3d2';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// initially get fav movies
getMovies(APIURL2);

async function getMovies(url) {
    const resp = await fetch(url + key);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData);
}

function showMovies(movies) {
    // clear main
    // const IMGPATH = images[0].src;

    main.innerHTML = '';
    movies.forEach((movie) => {
        const { name, price } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        console.log(name, price);

        movieEl.innerHTML = `
        <img
        src="${images[0].src}"
        alt="${name}"
            />
            <div class="movie-info">
                <h3>${name}</h3>
                <span class="">${price}</span>
              </div>
              <div class="overview">
                  <h3>Overview:</h3>
                  <h3>Categories:</h3>
                  
              </div>
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm + key);
        console.log(SEARCHAPI + searchTerm + key);

        search.value = '';
    }
});