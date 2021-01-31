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







