let sherlock = document.getElementById('sherlockLink')
let drStrange = document.getElementById('drStrangeLink')
let pennyDreadful = document.getElementById('pennyDreadfulLink')

sherlock.addEventListener(('click'), event => {
  init(apikey, 'sherlock')
    .catch((error) => {
      console.log(error.message)
    })
})
drStrange.addEventListener(('click'), event => {
  init(apikey, 'doctor+strange')
    .catch((error) => {
      console.log(error.message)
    })
})
pennyDreadful.addEventListener(('click'), event => {
  init(apikey, 'penny+dreadful')
    .catch((error) => {
      console.log(error.message)
    })
})

const render = (movies) => {
  // console.log(movies)
  let arrMovies = movies

  console.log(arrMovies)
  let moviesConjunto = document.getElementById('movieCard')
  movies.forEach((element) => {
    let cardMovies = document.createElement('div')

    let contentMovie = `
    <div class = "card" style = "width: 18rem;">
      <img src="${element.Poster}">
      <div class=""card-body">
      <h5>${element.Title}</h5>

      
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-dark btn-sm"  data-toggle="modal" data-target="#${element.imdbID}">Sinopsis</button> 
      </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="${element.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">${element.Title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <img src="${element.Poster}">
            <p> Año: ${element.Year}</p>
            <p> Tipo: ${element.Type}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             
            </div>
          </div>
        </div>
      </div>`

    /* <button class="btn btn-dark btn-sm" type="button" data-toggle="modal" data-target="${element.imdbID}">Sinopsis</button>` */

    cardMovies.innerHTML = contentMovie

    moviesConjunto.appendChild(cardMovies)
  })
}
