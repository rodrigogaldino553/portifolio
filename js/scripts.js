const closeBTN = document.querySelector('#close-btn')



function cardClick(id) {
    let img = document.getElementById(id)
    let projectIMG = document.querySelector('.hide')
    let projectPicture = document.querySelector('#project-picture')


    projectIMG.classList.remove('hide')
    projectIMG.classList.add('project-img')

    img = img.getAttribute('src')
    projectPicture.setAttribute('src', img)

    const closeContainer = document.querySelector('.project-img')

    closeContainer.addEventListener('click', () => {close()})
    closeBTN.addEventListener('click', () => { close() })
}

function close() {
    let projectIMG = document.querySelector('.project-img')

    projectIMG.classList.remove('project-img')
    projectIMG.classList.add('hide')

}

let slidePosition = 0
const slides = document.getElementsByClassName('item')
const totalSlides = slides.length

document.
          getElementById('next')
          .addEventListener('click', () => {
            moveToNext()
          })

document.
          getElementById('prev')
          .addEventListener('click', () => {
            moveToPrev()
          })


function updateSlidePosition() {
  for (let c = 0; c < totalSlides; c++) {
    slides[c].classList.remove('visible')
    
  }

  slides[slidePosition].classList.add('visible')
}

function moveToNext(){
  if(slidePosition === totalSlides - 1){
    slidePosition = 0
  }else{
    slidePosition ++
  }


  updateSlidePosition()
}

function moveToPrev(){
  if(slidePosition === 0){
    slidePosition = totalSlides - 1
  }else{
    slidePosition --
  }
  updateSlidePosition()
}


function automate(){
  setInterval(moveToNext, 3000)
}


automate()





