const cardArray = [
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./images/fries.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

let cardsChosen = []
let chosenCardsIds = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card);
    console.log(card, i);
  }
}

createBoard();

function checkMatch() {
const cards = document.querySelectorAll('#grid img')
const resultDisplay = document.querySelector('#result')
const optionOneId = chosenCardsIds[0]
const optionTwoId = chosenCardsIds[1]

  if (optionOneId === optionTwoId) {
    alert("You clicked the same card!")
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
   
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)

  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, try again!')
  }

  resultDisplay.textContent = cardsWon.length

  cardsChosen = []
  chosenCardsIds = []

  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = "Congratulations! You've found them all!"
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  chosenCardsIds.push(cardId)
  console.log('clicked', cardId)
  console.log(cardsChosen)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500)
  }
}
