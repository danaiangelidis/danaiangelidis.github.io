const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";
  
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
 };
  
const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");
  
    movies.forEach((movie) => {
        moviesSection.append(getMovieItem(movie));
    });
};
  
  const getMovieItem = (movie) => {
    let article = document.createElement("article");
    article.classList.add("mov");
    article.classList.add("flex-container");

    let image = document.createElement("img");
    image.src = `https://portiaportia.github.io/json/${movie.img}`;
    article.append(image);

    let section = document.createElement("section");
  
    let h3 = document.createElement("h3");
    h3.innerText = movie.title;
    section.append(h3);
  
    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(`Director: ${movie.director}`));
    ul.append(getLi(`Actors: ${movie.actors}`));
    ul.append(getLi(`Release Year: ${movie.year}`));
    ul.append(getLi(`Genres: ${movie.genres}`));
    ul.append(getLi(`${movie.description}`));

    article.append(section);
  
    return article;
};
  
const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};
  
window.onload = () => showMovies();