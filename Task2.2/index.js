const nav = document.querySelector('.nav__list')
const controls = [...document.querySelectorAll('.nav__btn')]
const foxesData = document.querySelectorAll('.box')

const handler = (e) => {
    if (Object.keys(e.target.dataset).length === 0) {
        return null
    }
    foxesData.forEach(item => {
        if (item.dataset.fox !== e.target.dataset.fox && e.target.dataset.fox !== 'all'){
            item.classList.add('hidden')
        } else {
            item.classList.remove('hidden')
        }
    })
   controls.forEach(control => {
       if (control.dataset.fox === e.target.dataset.fox){
           e.target.classList.add('active')
       } else {
           control.classList.remove('active')
       }
   })

}

nav.addEventListener('click',handler)