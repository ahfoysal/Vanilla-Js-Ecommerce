const key =
    'consumer_key=ck_29618b80e61c705dace0c49ceb724a3959df5b50&consumer_secret=cs_80cd666549222f2d3efb376bade63960ab3ce3d2';
let SEARCHAPI = 'https://expressbuybd.com/wp-json/wc/v3/products?search=';
let APIURL = 'https://expressbuybd.com/wp-json/wc/v3/products';
let APIURL2 = 'https://expressbuybd.com/wp-json/wc/v3';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const siteUrl = 'https://expressbuybd.com/';
const per_page = '&per_page=50';
const categorie = document.getElementById('categorie');

getMovies9(APIURL);
getMovies(APIURL, '');
fetchingData(APIURL2, '');

// const pID = '/2600';
async function fetchingData(url) {
    const resp = await fetch(url + '/orders' + '?' + key);
    const respData = await resp.json();

    console.log(respData);
}

async function getMovies9(url) {
    const resp = await fetch(url + '/categories' + '?' + key + '&per_page=10');
    const respData = await resp.json();

    console.log(respData);
    showMovies9(respData);
}

function showMovies9(movies) {
    // clear main
    // const IMGPATH = images[0].src;

    categorie.innerHTML = '';
    movies.forEach((movie) => {
        const { name, id } = movie;

        const movieEl = document.createElement('li');
        movieEl.classList.add('test');

        // console.log(name, price);

        movieEl.innerHTML = `
        <a onclick="getMovies(APIURL, '&category=${id}'); "> <p>${name}</p></a>
               
        `;

        categorie.appendChild(movieEl);
    });
}

async function getMovies(url, catID) {
    const resp = await fetch(url + '?' + key + catID + per_page);

    const respData = await resp.json();

    console.log(respData);

    showMovies(respData);
}

function showMovies(movies) {
    // clear main
    // const IMGPATH = images[0].src;

    main.innerHTML = '';
    movies.forEach((movie) => {
        const { images, name, price, id } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        // console.log(name, price);

        movieEl.innerHTML = `<div class="row">
        <a onclick="getMovies3(APIURL, '/${id}');
        "> <img
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

async function getMovies3(url, pID) {
    const resp = await fetch(url + pID + key);
    const respData = await resp.json();

    console.log(respData);

    showMovies3(respData);
}

function showMovies3(movies) {
    test.innerHTML = '';
    // const { images, name, price, permalink, id, short_description } = movie;

    const movieEl = document.createElement('section');
    movieEl.classList.add('Show-bar');

    // console.log(name, price);

    movieEl.innerHTML = ` 
    <button class="close" onclick="bal()">CLOSE</button>

        <div class="product-image">

          <img src="${movies.images[0].src}" alt="OFF-white Red Edition" draggable="false" />
        </div>

        <div class="product-info">
            <h2>${movies.name}</h2>
            <p>${movies.short_description}</p>
            <div class="price">৳${movies.price}</div>
        </div>
        <div class="btn">
        <a href='https://expressbuybd.com/?add-to-cart=${movies.id}'><button class="buy-btn">Buy Now</button>
        </div>
     
    
     `;

    test.appendChild(movieEl);
}

//     test.innerHTML = '';
//     movies.forEach((movie) => {
//         const { images, name, price, permalink, id, short_description } = movie;

//         const movieEl = document.createElement('section');
//         movieEl.classList.add('cards');
//         // console.log(name, price);

//         movieEl.innerHTML = `
//         <div class="product-image">
//         <a href="${permalink}">   <img src="${images[0].src}" alt="OFF-white Red Edition" draggable="false" /></a>
//         </div>
//         <div class="product-info">
//             <h2>${name}</h2>
//             <p>${short_description}</p>
//             <div class="price">৳${price}</div>
//         </div>
//         <div class="btn">
//         <a href='https://expressbuybd.com/?add-to-cart=${id}'><button class="buy-btn">Buy Now</button>
//         </div>

//      `;

//         test.appendChild(movieEl);
//     });
// }

///// close
function bal() {
    var x = document.getElementsByClassName('Show-bar');

    x[0].style.display = 'none';
}