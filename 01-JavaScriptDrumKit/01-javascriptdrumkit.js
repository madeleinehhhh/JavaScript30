


function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`)
  if(!audio) return
  audio.currentTime = 0;
  audio.play()

  const key = document.querySelector(`.key[data-key="${e.code}"]`)
  key.classList.toggle('playing')

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))

}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}



window.addEventListener('keydown', playSound)




// this was my attempt...
/* const keys = document.querySelectorAll('.key')
keys.forEach((key) => {
  key.addEventListener('click', () => {
    // on click, we also need to assign a variable to hold the data-key
    let dataKey = key.dataset.key
    console.log(dataKey)
    //and then that variable will be used to get the right audio
    let sound = document.getElementsByTagName
    //on clicking a key, we want to TOGGLE the class .playing
    key.classList.toggle('playing')
  })
})*/