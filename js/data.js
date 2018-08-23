const init = () => {
  const url ='https://www.omdbapi.com/?s=the+strain&plot=full&apikey=ea7bbac6'
  // 'https://www.omdbapi.com/?apikey=${apikey}&s=${search}=full&type:series';

  global.getData(url).then((data) => {
    // console.log(data.Search)
    render(data.Search)
  })
}
window.global = {
  // Se genera una función y dentro de ella una constante con la url del JSON para llamarlo con el método fetch.
  getData: (url) => {
    // console.log("2.4 " + url);
    return fetch(url).then(res => res.json())
  }
}
window.onload = init
