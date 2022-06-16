const APIURL2 = 'https://expressbuybd.com/wp-json/wc/v3/products?';

const APIURL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
// const IMGPATH = ] ;
const SEARCHAPI = 'https://expressbuybd.com/wp-json/wc/v3/products?search=';
const key =
    '&consumer_key=ck_29618b80e61c705dace0c49ceb724a3959df5b50&consumer_secret=cs_80cd666549222f2d3efb376bade63960ab3ce3d2';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const siteUrl = 'https://expressbuybd.com/';
const per_page = 'per_page=16';
// const categorie = 'category=250';
// initially get fav movies
getMovies(APIURL2);
getMovies2(APIURL2);

async function getMovies(url) {
    const resp = await fetch(url + per_page + key);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData);
}

async function getMovies2(url) {
    let categorie = 'category=251';

    const resp = await fetch(url + categorie + key);
    const respData = await resp.json();

    console.log(respData);

    showMovies2(respData);
}

function showMovies(movies) {
    // clear main
    // const IMGPATH = images[0].src;

    main.innerHTML = '';
    movies.forEach((movie) => {
        const { images, name, price, permalink, id } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        // console.log(name, price);

        movieEl.innerHTML = `<div class="row">
        <a href="${permalink}"> <img
        src="${images[0].src}"
        alt="${name}"
            /></a>
            <div class="movie-info">
                <h3>${name}</h3>
                <span class="">৳${price}</span>
              </div>
              <div class="overview">
                  <a href='https://expressbuybd.com/?add-to-cart=${id}'><button class="buy-btn">Buy Now</button>
                  </a>
              </div> </div>
        `;

        main.appendChild(movieEl);
    });
}

function showMovies2(movies) {
    // clear main
    // const IMGPATH = images[0].src;

    mains.innerHTML = '';
    movies.forEach((movie) => {
        const { images, name, price, permalink, id, short_description } = movie;

        const movieEl = document.createElement('section');
        movieEl.classList.add('card');
        // console.log(name, price);

        movieEl.innerHTML = ` 
        <div class="product-image">
        <a href="${permalink}">   <img src="${images[0].src}" alt="OFF-white Red Edition" draggable="false" /></a>
        </div>
        <div class="product-info">
            <h2>${name}</h2>
            <p>${short_description}</p>
            <div class="price">৳${price}</div>
        </div>
        <div class="btn">
        <a href='https://expressbuybd.com/?add-to-cart=${id}'><button class="buy-btn">Buy Now</button>
        </div>
     
    
     `;

        mains.appendChild(movieEl);
    });
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

////slick