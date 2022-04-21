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
  const works = works

  debugger
}

show_works()

/*var now = 0
let img = document.getElementById('view')


function slide(mod) {
    if (mod == 1) {
        if (now >= 11) {
            now = 0
        } else {
            now++
        }
    } else {
        if (now <= 0) {
            now = 11
        } else {
            now--
        }
    }

    img.setAttribute('src', `./assets/${now}.jpg`)
    if (now <= 0) {
        now = 11
    } else if (now >= 11) {
        now = 0
    }
}*/


//automate()





