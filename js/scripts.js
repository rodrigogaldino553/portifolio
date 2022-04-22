//import works from './works'
// import json file with works is not working, so i gonna put them right here

works = [
  {
    "name": "Pokedex",
    "description": "Was a challange for me because it was the first project using bootstrap. I had use APIs to get pokemons infos and pictures.<br>Technologies: HTML, CSS, Javascript and Bootstrap",
    "cover_picture": "./assets/projects-thumb/pokedex.jpeg",
    "link": "https://rodrigogaldino553.github.io/Pokedex/"
  },
  {
    "name": "Railsmails",
    "description": "It's no a comercial app, it was developed just for learnments proporses, and while its development I learn put my hands on code, and pratice my frontend skills with tailwindcss, and in the backend, I learn to auto send emails form my application.",
    "cover_picture": "./assets/projects-thumb/railsmails.png",
    "link": "https://railsmails.com"
  },
  {
    "name": "Ruby Corsego",
    "description": "Project developed inside a <a href='https://www.udemy.com/course/ruby-on-rails-6-learn-20-gems-build-an-e-learning-platform/'>Ruby on rails full course</a>, during this course I learn a lot of features and things from rails in 200 online classes that I watch and pratice on my own following all teacher's instructions",
    "cover_picture": "./assets/projects-thumb/ruby-corsego.png",
    "link": "https://ruby-corsego.herokuapp.com"
  }
]

const card_template = (work) => {
  return `
    <div class="card custom-card">
      <img src="${work.cover_picture}" class="card-img-top" alt="${work.name}">
      <div class="card-body">
        <h5 class="card-title">${work.name}</h5>
        <p class="card-text">${work.description}</p>
        <div class="check-btn">
          <a href="${work.link}" target="_blank" class="btn btn-outline-light">Check it out here</a>
        </div>
      </div>
    </div>
  `
}


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

function openLink(link){
  window.open(link)
}


function show_works(){
  const slider = document.getElementById('slider')
  
  works.forEach(work => {
    slider.innerHTML += card_template(work)
  });

}

/*var sliderWorks = document.querySelector('#slider')
const slider = document.querySelector('#slider')
const scrollNext = 285 //valeu to move on X, it's the same length of a slider card + its margin, to one and hide one
var scroller = 0


slider.addEventListener('mouseover', ()=>{
  sliderWorks = ""
})

slider.addEventListener('mouseout', ()=>{
  sliderWorks = document.querySelector('#slider')
})


function scroll(){
  if(sliderWorks === "") return false

  scroller += scrollNext
  if(scroller > 840){
    scroller = 0
  }
  sliderWorks.scrollTo(scroller, 0)

}

function auto_scroll(){
  setInterval(scroll, 3000)
}*/


function init(){
  show_works()
  // auto_scroll()
}

init()






