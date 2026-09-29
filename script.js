/* =========================================
   MOVIE DATA
========================================= */

const movies = [

    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        genre: "Sci-Fi",
        releaseDate: "November 7, 2014",
        duration: "2h 49m",
        description:
            "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        cast:
            "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        poster:
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=Interstellar+trailer"
    },

    {
        id: 2,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi",
        releaseDate: "July 16, 2010",
        duration: "2h 28m",
        description:
            "A skilled thief who steals secrets through dream-sharing technology is given a difficult task: planting an idea into someone's mind.",
        cast:
            "Leonardo DiCaprio, Joseph Gordon-Levitt, Tom Hardy",
        poster:
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=Inception+trailer"
    },

    {
        id: 3,
        title: "John Wick",
        year: 2014,
        rating: 7.4,
        genre: "Action",
        releaseDate: "October 24, 2014",
        duration: "1h 41m",
        description:
            "A retired assassin is forced back into action after a dangerous attack brings his violent past back to him.",
        cast:
            "Keanu Reeves, Michael Nyqvist, Willem Dafoe",
        poster:
            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=John+Wick+trailer"
    },

    {
        id: 4,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: "Sci-Fi",
        releaseDate: "March 31, 1999",
        duration: "2h 16m",
        description:
            "A computer hacker discovers that reality is very different from what he believed and joins a fight for freedom.",
        cast:
            "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        poster:
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=The+Matrix+trailer"
    },

    {
        id: 5,
        title: "Free Guy",
        year: 2021,
        rating: 7.1,
        genre: "Comedy",
        releaseDate: "August 13, 2021",
        duration: "1h 55m",
        description:
            "A bank employee discovers that he is actually a background character inside a video game.",
        cast:
            "Ryan Reynolds, Jodie Comer, Taika Waititi",
        poster:
            "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=Free+Guy+trailer"
    },

    {
        id: 6,
        title: "The Hangover",
        year: 2009,
        rating: 7.7,
        genre: "Comedy",
        releaseDate: "June 5, 2009",
        duration: "1h 40m",
        description:
            "Three friends wake up after an unforgettable night and attempt to figure out what happened before a wedding.",
        cast:
            "Bradley Cooper, Ed Helms, Zach Galifianakis",
        poster:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=The+Hangover+trailer"
    },

    {
        id: 7,
        title: "The Conjuring",
        year: 2013,
        rating: 7.5,
        genre: "Horror",
        releaseDate: "July 19, 2013",
        duration: "1h 52m",
        description:
            "Paranormal investigators help a family experiencing strange events inside their new home.",
        cast:
            "Vera Farmiga, Patrick Wilson, Lili Taylor",
        poster:
            "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=The+Conjuring+trailer"
    },

    {
        id: 8,
        title: "It",
        year: 2017,
        rating: 7.3,
        genre: "Horror",
        releaseDate: "September 8, 2017",
        duration: "2h 15m",
        description:
            "A group of young friends confronts a mysterious entity that takes the form of their greatest fears.",
        cast:
            "Bill Skarsgård, Jaeden Martell, Finn Wolfhard",
        poster:
            "https://images.unsplash.com/photo-1505635552518-3448f5a28f1d?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=It+2017+trailer"
    },

    {
        id: 9,
        title: "Mad Max",
        year: 2015,
        rating: 8.1,
        genre: "Action",
        releaseDate: "May 15, 2015",
        duration: "2h",
        description:
            "In a post-apocalyptic world, a survivor joins a warrior on an intense journey across a dangerous wasteland.",
        cast:
            "Tom Hardy, Charlize Theron, Nicholas Hoult",
        poster:
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=Mad+Max+Fury+Road+trailer"
    },

    {
        id: 10,
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genre: "Drama",
        releaseDate: "July 6, 1994",
        duration: "2h 22m",
        description:
            "A kind-hearted man experiences several extraordinary moments throughout his life while remaining devoted to the people he loves.",
        cast:
            "Tom Hanks, Robin Wright, Gary Sinise",
        poster:
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=Forrest+Gump+trailer"
    },

    {
        id: 11,
        title: "La La Land",
        year: 2016,
        rating: 8.0,
        genre: "Romance",
        releaseDate: "December 25, 2016",
        duration: "2h 8m",
        description:
            "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
        cast:
            "Ryan Gosling, Emma Stone, John Legend",
        poster:
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=La+La+Land+trailer"
    },

    {
        id: 12,
        title: "The Notebook",
        year: 2004,
        rating: 7.8,
        genre: "Romance",
        releaseDate: "June 25, 2004",
        duration: "2h 3m",
        description:
            "A timeless romantic story about two people whose lives remain connected despite years of challenges.",
        cast:
            "Ryan Gosling, Rachel McAdams, James Garner",
        poster:
            "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=700&q=80",
        trailer:
            "https://www.youtube.com/results?search_query=The+Notebook+trailer"
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const movieGrid =
    document.getElementById("movieGrid");

const trendingMovies =
    document.getElementById("trendingMovies");

const searchInput =
    document.getElementById("searchInput");

const noResults =
    document.getElementById("noResults");

const movieSectionTitle =
    document.getElementById("movieSectionTitle");

const genreButtons =
    document.querySelectorAll(".genre-btn");

const modal =
    document.getElementById("movieModal");

const modalClose =
    document.getElementById("modalClose");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.querySelector(".nav-menu");


/* =========================================
   CURRENT FILTER
========================================= */

let selectedGenre = "All";


/* =========================================
   CREATE MOVIE CARD
========================================= */

function createMovieCard(movie) {

    return `

        <article class="movie-card">

            <div class="movie-poster-container">

                <img
                    src="${movie.poster}"
                    alt="${movie.title} poster"
                    class="movie-poster"
                    loading="lazy"
                >

                <span class="movie-rating">
                    ⭐ ${movie.rating}
                </span>

            </div>


            <div class="movie-info">

                <h3 class="movie-title">
                    ${movie.title}
                </h3>


                <div class="movie-meta">

                    <span>
                        ${movie.year}
                    </span>

                    <span>
                        •
                    </span>

                    <span>
                        ${movie.genre}
                    </span>

                </div>


                <p class="movie-description">
                    ${movie.description}
                </p>


                <button
                    class="details-btn"
                    onclick="openMovieDetails(${movie.id})"
                >
                    View Details
                </button>

            </div>

        </article>

    `;
}


/* =========================================
   DISPLAY MOVIES
========================================= */

function displayMovies(movieList) {

    movieGrid.innerHTML = "";


    if (movieList.length === 0) {

        noResults.classList.add("show");

        return;

    }


    noResults.classList.remove("show");


    movieList.forEach(movie => {

        movieGrid.innerHTML +=
            createMovieCard(movie);

    });

}


/* =========================================
   DISPLAY TRENDING MOVIES
========================================= */

function displayTrendingMovies() {

    const trending = [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);


    trendingMovies.innerHTML = "";


    trending.forEach(movie => {

        trendingMovies.innerHTML +=
            createMovieCard(movie);

    });

}


/* =========================================
   FILTER MOVIES
========================================= */

function filterMovies() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    let filteredMovies =
        movies.filter(movie => {

            const matchesGenre =
                selectedGenre === "All" ||
                movie.genre === selectedGenre;


            const matchesSearch =
                movie.title
                    .toLowerCase()
                    .includes(searchTerm);


            return matchesGenre && matchesSearch;

        });


    displayMovies(filteredMovies);


    if (searchTerm !== "") {

        movieSectionTitle.textContent =
            `Search Results`;

    } else if (selectedGenre !== "All") {

        movieSectionTitle.textContent =
            `${selectedGenre} Movies`;

    } else {

        movieSectionTitle.textContent =
            "All Movies";

    }

}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    filterMovies
);


/* =========================================
   GENRE BUTTONS
========================================= */

genreButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            genreButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            selectedGenre =
                button.dataset.genre;


            filterMovies();


            document
                .getElementById("movies")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});


/* =========================================
   MOVIE DETAILS
========================================= */

function openMovieDetails(movieId) {

    const movie =
        movies.find(
            item => item.id === movieId
        );


    if (!movie) return;


    document.getElementById(
        "modalPoster"
    ).src = movie.poster;


    document.getElementById(
        "modalPoster"
    ).alt =
        `${movie.title} poster`;


    document.getElementById(
        "modalTitle"
    ).textContent =
        movie.title;


    document.getElementById(
        "modalGenre"
    ).textContent =
        movie.genre;


    document.getElementById(
        "modalRating"
    ).textContent =
        `⭐ ${movie.rating}`;


    document.getElementById(
        "modalYear"
    ).textContent =
        movie.year;


    document.getElementById(
        "modalDuration"
    ).textContent =
        movie.duration;


    document.getElementById(
        "modalDescription"
    ).textContent =
        movie.description;


    document.getElementById(
        "modalReleaseDate"
    ).textContent =
        movie.releaseDate;


    document.getElementById(
        "modalCast"
    ).textContent =
        movie.cast;


    document.getElementById(
        "modalTrailer"
    ).href =
        movie.trailer;


    modal.classList.add("show");


    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeModal();

        }

    }
);


/* =========================================
   MOBILE MENU
========================================= */

mobileMenuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("open");

    }
);


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "open"
                );

            }
        );

    });


/* =========================================
   INITIALIZE WEBSITE
========================================= */

displayMovies(movies);

displayTrendingMovies();