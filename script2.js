const key =
    'consumer_key=ck_29618b80e61c705dace0c49ceb724a3959df5b50&consumer_secret=cs_80cd666549222f2d3efb376bade63960ab3ce3d2';
let SEARCHAPI = 'https://expressbuybd.com/wp-json/wc/v3/products?search=';
let APIURL = 'https://expressbuybd.com/wp-json/wc/v3/products';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const siteUrl = 'https://expressbuybd.com/';
const per_page = '&per_page=16';

// const categorie = 'category=250';
// initially get fav movies
getMovies(APIURL);
getMovies2(APIURL);
async function getMovies(url) {
    const resp = await fetch(url + '?' + key + per_page);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData);
}

async function getMovies2(url) {
    let categorie = '&category=251?';

    const resp = await fetch(url + '?' + key + categorie);
    const respData = await resp.json();

    console.log(respData);

    showMovies2(respData);
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
        <a onclick="getMovies3(APIURL, '/${id}?');">  

        <img
        src="${images[0].src}"
        alt="${name}"
            /></a>
            <div class="movie-info">
                <h3>${name}</h3>
                <span class="">৳${price}</span></div>
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
        const { images, name, price, id, short_description } = movie;

        const movieEl = document.createElement('section');
        movieEl.classList.add('cards');

        // console.log(name, price);

        movieEl.innerHTML = ` 
        <div class="product-image">
        <a onclick="getMovies3(APIURL, '/${id}?');
        ">  <img src="${images[0].src}" alt="OFF-white Red Edition" draggable="false" />
        </div>
        <div class="product-info">
            <h2>${name}</h2>
            <p>${short_description}</p>
            <div class="price">৳${price}</div></a>
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
        getMovies(SEARCHAPI + searchTerm + '&' + key);
        console.log(SEARCHAPI + searchTerm + '&' + key);

        search.value = '';
    }
});

////slick

async function getMovies3(url, pID) {
    hide();
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
            <p>${movies.description}</p>

            <div class="price">৳${movies.price}</div>
        </div>
        <div class="btn">
        <a href='https://expressbuybd.com/?add-to-cart=${movies.id}'><button class="buy-btn">Buy Now</button>
        </div>
     
    
     `;

    test.appendChild(movieEl);
}

///// close
function bal() {
    var x = document.getElementsByClassName('Show-bar');
    var y = document.getElementsByClassName('hide-bar');

    y[0].style.display = 'none';
    x[0].style.display = 'none';
}

function hide() {
    var y = document.getElementsByClassName('hide-bar');
    y[0].style.display = 'block';
    animate(dots, 'dots--animate');
}

/////////loder
// By @AbubakerSaeed96 (Twitter)
// ===================

// Inspiration:
// Oleg Frolov's dribbble shot: https://dribbble.com/shots/5331825-Loading-XXI

// I thought making this would be easy ...but boy 😩

// Thank You For Viewing!
// Say 👋🏻 or hire me 👉🏻 abubaker.saeed.1996@gmail.com
// ================================================================

// Helper(s)
// =========
let $ = (e) => document.querySelector(e);

// Dots
// ====
let dots = $('.dots');

// Function
// ========
function animate(element, className) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
        setTimeout(() => {
            animate(element, className);
        }, 500);
    }, 2500);
}

animate(dots, 'dots--animate');