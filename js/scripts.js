const closeBTN = document.querySelector('#close-btn')


function getAge(){
	let current_age
    let today = new Date()
    let now = { 
       day: String(today.getDate()).padStart(2, '0'),
        month: String(today.getMonth() + 1).padStart(2, '0'),
        year: today.getFullYear()
    }// the date of today
    const bornDate = {day: 30, month: 4, year: 2003}// will receive the date i was born, I think that it can be in the date format to make easy to compair
    if(now.month > bornDate.month || (now.month == bornDate.month && now.day == bornDate.day)){
    	current_age = now.year - bornDate.year
    }else{
    	current_age = (now.year - bornDate.year) - 1
    }
    document.querySelector('#current-age').innerHTML = current_age
}

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
  window.open(link)
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


//automate()





