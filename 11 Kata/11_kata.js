//* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha
//* sido cada sonido agregado por los usuarios a favorito.

// *Para ello recorre la lista de usuarios y usa forin para recoger el nombre
// *de los sonidos que el usuario tenga como favoritos.

//* Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada
// *vez que ese sonido se repita como favorito en cada usuario.

// *Este ejercicio es un poco complicado con los conocimientos actuales pero...a
// *la vez un buen reto y oportunidad para comprender que hay muchas formas de
// *hacer las cosas en javascript.

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
let arraySound = []

let counter = 0
for (const user of users) {
  for (const value in user.favoritesSounds) {
    arraySound.push(value)
  }
}

// for (let i = 0; i < arraySound.length; i++) {
//   const element = arraySound[i]
//   const counter = 0

//   for (let j = 1; j < arraySound.length; j++) {
//     const duplicate = arraySound[j]
//     if (duplicate === element) {
//       counterOf++
//       arraySound.splice(j, 1)
//       j--
//     }
//   }
//   console.log(`${element} se ha repetido ${counter} veces `)
// }

let counterSound = {}

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    let nameOfsound = sound
    if (counterSound[nameOfsound]) {
      counterSound[nameOfsound]++
    } else {
      counterSound[nameOfsound] = 1
    }
  }
}
console.log(`Los valores repetidos son los siguientes:`, counterSound)
