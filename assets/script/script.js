let qtd_cartas = 0
const baralho = []
let parrot = ['1', '2', '3', '4', '5', '6', '7']
let cardOne, cardTwo
let moves = 0
let hits = 0

function comparador() {
  return Math.random() - 0.5
}

function ask() {
  while (!(qtd_cartas % 2 == 0 && qtd_cartas >= 4 && qtd_cartas <= 14)) {
    qtd_cartas = prompt('Com quantas cartas deseja jogar?')
  }
  startGame()
}

function startGame() {
  for (let i = 0; i < qtd_cartas / 2; i++) {
    let carta = parrot[i]
    baralho.push(carta)
    baralho.push(carta)
  }
  baralho.sort(comparador)

  showCards()
}

function showCards() {
  let decks = document.querySelector('.decks')
  for (let i = 0; i < baralho.length; i++) {
    let cartinha = `
        <li class="card turned" data-test="card" onclick="desvirar(this)">
            <div class="front-face face">
                <img data-test="face-down-image" src="./assets/img/back.png" >
            </div>
            <div class="back-face face">
                <img data-test="face-up-image" src="./assets/img/${baralho[i]}.gif">
            </div>
        </li> 
        `
    decks.innerHTML += cartinha
  }
  
}


