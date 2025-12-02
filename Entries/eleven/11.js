const movieList = document.querySelector(".movie-list");
const addButton = document.querySelector(".button-add");
const resetButton = document.querySelector(".button-reset");

document.body.style.backgroundColor = "black"; // start black

const movies = [
  "Once Upon a Time in Hollywood",
  "The Black Swan",
  "Kungfu Hustle",
  "Inception",
  "Everything Everywhere All At Once",
  "The Grand Budapest Hotel",
  "Princess Bride",
  "The Dark Knight",
  "Romeo+Juliet",
  "I Origins",
  "Mermaid",
  "Eternal love",
  "Polar Express",
  "Spirited Away",
  "The Notebook",
  "Lady Bird",
  "Call Me By Your Name",
  "La La Land",
  "Her",
  "Midsommar",
  "The Shape of Water",
  "Coco",
  "Up",
  "Moonlight",
  "Wolf of Wall Street",
  "Stand By Me",
  "The Perks of Being a Wallflower",
  "Dead Poets Society",
  "Good Will Hunting",
  "Whiplash",
  "The God Father",
  "Pulp Fiction",
  "Fight Club",
  "Forrest Gump",
  "The Matrix",
  "Gladiator",
  "The Lord of the Rings: The Return of the King",
  "Avatar",
  "Titanic",
  "The Shawshank Redemption",
  "Interstellar",
  "The Social Network",
  "Django Unchained",
  "The Avengers",
  "Guardians of the Galaxy",
  "Black Panther",
  "Doctor Strange",
  "Wonder Woman",
  "Aquaman",
  "Spider-Man: Into the Spider-Verse",
  "Deadpool",
  "Logan",
  "Mad Max: Fury Road",
  "John Wick",
  "The Hunger Games",
  "Divergent",
  "The Fault in Our Stars",
  "A Star is Born",
  "Joker",
  "Tenet",
  "Blade Runner 2049",
  "The Irishman",
  "Jojo Rabbit",
  "Parasite",
  "1917",
  "Ford v Ferrari",
  "Knives Out",
  "Little Women",
  "The Trial of the Chicago 7",
  "Soul",
  "Onward",
  "Raya and the Last Dragon",
  "Luca",
  "Encanto",
  "Turning Red",
  "Lightyear"
];

function createMovieItem(movieTitle) {
  const movieItem = document.createElement("div");
  movieItem.classList.add("movie");
  movieItem.textContent = movieTitle;

  movieItem.addEventListener("click", function() {
    movieItem.classList.toggle("red");
  });

  return movieItem;
}

function addRandomMovie() {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const newMovie = movies[randomIndex];
  movieList.appendChild(createMovieItem(newMovie));

  document.body.style.backgroundColor = "blue"; 
}

function resetMovies() {
  document.body.style.backgroundColor = "black"; 

  window.location.reload();
}

addButton.addEventListener("click", addRandomMovie);
resetButton.addEventListener("click", resetMovies);
