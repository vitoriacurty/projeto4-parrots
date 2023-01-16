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
  desvirarTudo()
}

function desvirar(card) {
  if (card.classList.contains('turned')) {
    return
  }
  if (cardOne !== undefined && cardTwo !== undefined) {
    return
  }
  card.classList.add('turned')
  moves++
  if (cardOne === undefined) {
    cardOne = card
  } else {
    if (cardTwo === undefined) {
      cardTwo = card
      if (cardOne.innerHTML === cardTwo.innerHTML) {
        fixa()
        hits += 2
        checkGameOver()
      } else {
        setTimeout(vira, 1000)
      }
    }
  }
}

function desvirarTudo() {
  const cards = document.querySelectorAll('.turned')
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('turned')
  }
}

function fixa() {
  cardOne = undefined
  cardTwo = undefined
}

function checkGameOver() {
  if (hits === baralho.length) {
    setTimeout(gameOver, 1000)
  } else {
    console.log('Continua o jogo')
  }
}

function vira() {
  cardOne.classList.remove('turned')
  cardTwo.classList.remove('turned')
  fixa()
}

function gameOver() {
  alert(`Você ganhou em ${moves} jogadas!`)
  const recomecar = confirm('Deseja jogar novamente?')
  if (recomecar === true) {
    window.location.reload()
  } else {
    alert('Obrigado por jogar!')
  }
}
ask()
