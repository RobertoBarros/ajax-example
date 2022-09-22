const signUP = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"email": emailValue, "password": passwordValue})
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

const form = document.getElementById('form')
form.addEventListener('submit', signUP)



// const btn = document.querySelector('#btn')
const btn = document.getElementById('btn')

const results = document.getElementById('results')

const formSearch = document.getElementById('search')
const movieName = document.getElementById('movie-name')

formSearch.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = movieName.value;
  // console.log(name)

  results.innerHTML = ''

  fetch(`https://www.omdbapi.com/?apikey=adf1f2d7&s=${name}`)
    .then(response => response.json() )
    .then((data) => {
      // console.log(data);
      data.Search.forEach((movie) => {
        // console.log(movie)
        results.insertAdjacentHTML('beforeend', `<li><img src='${movie.Poster}'></li>`)
      })
    })


})






btn.addEventListener('click', (event) => {
  // const btn = event.currentTarget();
  // btn.classList.remove('btn-primary')
  // btn.classList.add('btn-danger')

  fetch(`https://www.omdbapi.com/?apikey=adf1f2d7&s=batman`)
    .then(response => response.json() )
    .then((data) => {
      // console.log(data);
      data.Search.forEach((movie) => {
        // console.log(movie)
        results.insertAdjacentHTML('beforeend', `<li>${movie.Title}</li>`)
      })
    })

})








// ES6
// const fullname = (first, last) => {
//   return "${firtst} ${last}"
// }

// ES5
// var fullname(first, last) {
//   return "${firtst} ${last}"
// }
