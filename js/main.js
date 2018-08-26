let sherlock = document.getElementById('sherlockLink')
let drStrange = document.getElementById('drStrangeLink')
let pennyDreadful = document.getElementById('pennyDreadfulLink')

sherlock.addEventListener(('click'), event => {
  init(apikey, 'sherlock').then((response) => {
  })
    .catch((error) => {
      console.log(error.message)
    })
  
});
drStrange.addEventListener(('click'), event => {
  init(apikey, 'dr+strange').then((response) => {
  })
    .catch((error) => {
      console.log(error.message)
    })
});
pennyDreadful.addEventListener(('click'), event => {
  init(apikey, 'penny+dreadful').then((response) => {
  })
    .catch((error) => {
      console.log(error.message)
    })
})

const render = (movies) => {
  // console.log(movies)
  let arrMovies = movies;

  console.log(arrMovies)
  let moviesConjunto = document.getElementById('movieCard')
  movies.forEach((element) => {
    let cardMovies = document.createElement('div')
    let contentMovie = `
      <img src="${element.Poster}">
      <h4>Tìtulo : ${element.Title}</h4>
      `
    cardMovies.innerHTML = contentMovie
    moviesConjunto.appendChild(cardMovies)
  })
}
