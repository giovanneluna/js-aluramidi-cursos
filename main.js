function tocaSom(id) {
  const elemento = document.querySelector(id)

  if (elemento != null && elemento.localName === "audio") {
    elemento.play()
  } else alert("Elemento não encontrado ou seletor inválido")
}

const listaDeTeclas = document.querySelectorAll(".tecla")

// let contador = 0

// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador]

//   const instrumento = tecla.classList[1]

//   const idAudio = `#som_${instrumento}`

//   tecla.onclick = function () {
//     tocaSom(idAudio)
//   }
//   contador = contador + 1
// }

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]

  const instrumento = tecla.classList[1]

  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  tecla.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa")
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa")
  }
}
