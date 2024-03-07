// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.
// Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
//* Solucion valida
// let swap = (array, min, max) => {
//   let sobrante = array[min]
//   array.splice(min, 1, array[max])
//   array[max] = sobrante

//   console.log(array)
// }
// swap(fantasticFour, 3, 2)

let swap2 = (array, min, max) => {
  let sustituido = array[min]
  array.copyWithin(min, max, max + 1)
  array[max] = sustituido
  console.log(array)
}

swap2(fantasticFour, 0, 3)
