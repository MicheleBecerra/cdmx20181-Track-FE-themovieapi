const apikey = 'ea7bbac6'
let search = ' '

const init = (api, search) => {
  let url = 'https://www.omdbapi.com/?apikey=' + api + '&s=' + search

  global.getData(url).then((data) => {
    render(data.Search)
  // console.log(data)
  })
}
window.global = {
  // Se genera una función y dentro de ella una constante con la url del JSON para llamarlo con el método fetch.
  getData: (url) => {
    // console.log("2.4 " + url);
    return fetch(url).then(res => res.json())
  }
}

// window.onload = init
