//import works from './works'
// import json file with works is not working, so i gonna put them right here

works = [
  {
    "name": "taltal",
    "description": "blablablablablablablablablabla",
    "cover_picture": "https://www.hypeness.com.br/1/2021/07/d8d83d87-garfield_ferdinand_d.jpg",
    "link": "0"
  },
  {
    "name": "Pokedex",
    "description": "Was a challange for me because it was the first project using bootstrap. I had use APIs to get pokemons infos and pictures.<br>Technologies: HTML, CSS, Javascript and Bootstrap",
    "cover_picture": "https://github.com/rodrigogaldino553/portifolio/blob/main/assets/projects-thumb/pokedex.jpeg?raw=true",
    "link": "https://rodrigogaldino553.github.io/Pokedex/"
  },
  {
    "name": "Pokedex",
    "description": "Was a challange for me because it was the first project using bootstrap. I had use APIs to get pokemons infos and pictures.<br>Technologies: HTML, CSS, Javascript and Bootstrap",
    "cover_picture": "https://github.com/rodrigogaldino553/portifolio/blob/main/assets/projects-thumb/pokedex.jpeg?raw=true",
    "link": "https://rodrigogaldino553.github.io/Pokedex/"
  }
]

const card_template = (work) => {
  return `
    <div class="card custom-card">
      <img src="${work.cover_picture}" class="card-img-top" alt="${work.name}">
      <div class="card-body">
        <h5 class="card-title">${work.name}</h5>
        <p class="card-text">${work.description}</p>
        <a href="${work.link}" target="_blank" class="btn btn-outline-dark">Visit</a>
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
  //debugger
  
  works.forEach(work => {
    slider.innerHTML += card_template(work)
  });

}

show_works()

var sliderWorks = document.querySelector('#slider')
const slider = document.querySelector('#slider')
const scrollNext = 285 //valeu to move on X, it's the same length of a slider card, to one and hide one
var scroller = 0


slider.addEventListener('mouseover', ()=>{
  sliderWorks = ""
})

slider.addEventListener('mouseout', ()=>{
  sliderWorks = document.querySelector('#slider')
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






