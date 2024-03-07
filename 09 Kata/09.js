// *Dado el siguiente javascript usa forof para recorrer el array de películas,
//* genera un nuevo array con las categorías de las películas e imprime por
//* consola el array de categorías. Ten en cuenta que las categorías no deberían
//* repetirse.
//* Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

let [...moviesAll] = movies

//* 1°Solucion
let arrayFiltered = []

for (const movie of movies) {
  for (const element of movie.categories) {
    if (!arrayFiltered.includes(element)) {
      arrayFiltered.push(element)
    }
  }
}
console.log(arrayFiltered)
