//const apikey ='ea7bbac6';
//let search = '';

const render = (movies) => {
  console.log(movies)
  let moviesConjunto = document.getElementById('movieCard')
  movies.forEach((element) => {
    let cardMovies = document.createElement('div');
    let contentMovie = `
      <img src="${element.Poster}">
      <p>Tìtulo : ${element.Title}</p>
      `;
    cardMovies.innerHTML = contentMovie;
    moviesConjunto.appendChild(cardMovies);
  })
}
