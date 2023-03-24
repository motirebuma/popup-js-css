const openMessage = document.querySelector('.open-message')
const showBox = document.querySelector('.box')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.btn')

const hidePopMessage = () => {
    showBox.classList.add('hidden')
    overlay.classList.add('hidden')
}
openMessage.addEventListener('click', () => {
    showBox.classList.remove('hidden')
    overlay.classList.remove('hidden')
})
closeBtn.addEventListener('click', hidePopMessage)
overlay.addEventListener('click', hidePopMessage)
document.addEventListener('keyup', (e) => {
    if(e.key == "Escape"){
        hidePopMessage()
    }
})