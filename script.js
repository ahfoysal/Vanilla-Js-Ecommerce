const APIURL =
    'https://expressbuybd.com/wp-json/wc/v3/products?category=250&consumer_key=ck_29618b80e61c705dace0c49ceb724a3959df5b50&consumer_secret=cs_80cd666549222f2d3efb376bade63960ab3ce3d2';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
getMovies();

async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);
    showMovies(respData);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { images, name, price } = movie;
        const imgsrc = images[0].src;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHtml = `
            <img src="${images?.[0]?.src}"/>
            <div class="movie-info"></div>
            <h3>${name}</h3>
            <span class>${price}</span>     </div>  `;
        console.log(images[0].src);
        main.appendChild(movieEl);
    });
}
getMovies();