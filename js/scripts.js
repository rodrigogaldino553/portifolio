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

function openLink(link){
  window.open('./projects-thumb/all-safe.html')//link)
}

var sliderWorks = document.querySelector('.working')
const slider = document.querySelector('.slider')
const scrollNext = 280 //value to move on X, it's the same length of a slider card, to one and hide one
var scroller = 0


slider.addEventListener('mouseover', ()=>{
  sliderWorks = ""//to stop the slider when the mouse is in over on slider box
})

slider.addEventListener('mouseout', ()=>{
  sliderWorks = document.querySelector('.working')
})

function walk(){
  if(sliderWorks === "") return false
  scroller += scrollNext
  if(scroller > 840){
    scroller = 0
  }
  sliderWorks.scrollTo(scroller, 0)

}

function automate(){
  setInterval(walk, 3000)
}


automate()





