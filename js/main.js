const characters = document.querySelectorAll('.character__item')
let overlay = document.querySelector('.overlay')
let popup = document.querySelector('.popup')
let choice = document.querySelector('.login__choice')
let circles = document.querySelectorAll('.login__choice')
let swipers = document.querySelectorAll('.choice__thumb')
let popupContainer = document.querySelector('.popup__container')
let logIn = document.querySelector('.login__btn')
let body = document.querySelector('body')
let characterInfo = document.querySelector('.character__info')
let infoContent = document.querySelectorAll('.character__info-content')
let closeCharacter = document.querySelector('.close__character')
let currentCharacter = document.querySelector('.current__character')
let viewMore = document.querySelector('.view__more')
let charctersContainer = document.querySelector('.characters__container')
let characterList = document.querySelector('.character__list')
/* registration form */

logIn.onclick = () => {
  overlay.classList.add('active')
  popup.classList.add('active')
  bodyLock()
}

overlay.onclick = () => {
  overlay.classList.remove('active')
  popup.classList.remove('active')
  bodyUnLock()
}
circles.forEach((circle) => {
  circle.onclick = () => {
    swipers.forEach((swiper) => {
      swiper.classList.toggle('checked')
    })
    popupContainer.classList.toggle('another__side')
  }
})

/* characters info */

characters.forEach((character) => {
  const picture = character.querySelector('.character__picture')
  const name = character.querySelector('.character__name')
  let characterName
  let characterPicture
  picture.onclick = () => {
    let image = picture.src
    characterName = name.textContent
    currentCharacter.src = image
    characterActive()
    bodyLock()
  }
  name.onclick = () => {
    let firstName = name.textContent
    characterPicture = picture.src
    currentCharacter.src = characterPicture
    characterActive()
    bodyLock()
  }
})

closeCharacter.onclick = () => {
  characterInfo.classList.remove('active')
  bodyUnLock()
  infoContent.forEach((info) => {
    info.classList.remove('active')
  })
}

function bodyLock() {
  body.classList.add('lockscroll')
}

function bodyUnLock() {
  body.classList.remove('lockscroll')
}

function characterActive() {
  characterInfo.classList.add('active')
  infoContent.forEach((info) => {
    info.classList.add('active')
  })
}
