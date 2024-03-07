//* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//* con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const olderAge = ages.filter((age) => age >= 18)
console.log(olderAge)

//* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//* con los valores que sean par.
const agesSecondPart = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const even = agesSecondPart.filter((age) => age % 2 === 0)
console.log(even)

//* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//* con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamerFiltered = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(streamerFiltered)

//* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//* con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
//* usar la funcion .includes() para la comprobación.

const streamersSecondPart = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamerSecondFilter = streamersSecondPart.filter((streamer) =>
  streamer.name.includes('u')
)
console.log(streamerSecondFilter)

//*  5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
//*  el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
//*  .includes() para la comprobación.
//*  Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//*  .age sea mayor que 35.

const lastFilter = streamersSecondPart.filter((streamer) => {
  if (streamer.gameMorePlayed.includes('Legends') && streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    return streamer.gameMorePlayed.includes('LEGENDS')
  } else if (streamer.gameMorePlayed.includes('Legends')) {
    return streamer.gameMorePlayed
  }
})
console.log(lastFilter)
// *Otro metodo posiblemente mejor
//* const filtered4 = streamers.filter((streamer) => {
//*   if (streamer.gameMorePlayed.includes("Legends")) {
//*       if (streamer.age > 35) {
//*           streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
// *      }
// *      return streamer;
//*   }
//* });

//* Dado el siguiente HTML (recuerda enlazar el js)

//* Dado el siguiente javascript, utiliza .filter() para mostrar por consola
//* los streamers que incluyan la palabra introducida en el input. De esta forma, si
//* introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//* introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// !EJERCICIO IMPORTANTE.
const streamerTerceraParte = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
let input = document.querySelector('input')

let filt = input.addEventListener('input', (e) => {
  console.log(
    streamerTerceraParte.filter((stream) =>
      stream.name.includes(e.target.value)
    )
  )
})

// *OTRA FORMA DE HACE LO MISMO PUEDE SER QUE MEJOR

let filter = (e) => {
  const ArraytoFilter = streamerTerceraParte.filter((streamer) =>
    streamer.name.toLowerCase().includes(e.target.value.toLowerCase())
  )
  console.log(e.target.value.toLowerCase())
  console.log(ArraytoFilter)
}

//? let input = document.querySelector('input') Esta arriba declarada

input.addEventListener('input', (e) => filter(e))
