function init(){

  const startButton = document.querySelector('.start')
  const restartButton = document.querySelector('.restart')
  const grid = document.querySelector('.grid')
  const blurb = document.querySelector('.container-2')
  const title = document.querySelector('.title')

  //change home page to game page
  function gamePage(){
    startButton.remove()
    restartButton.remove()
    blurb.remove()
    title.remove()
  }
  function startGame () {
    gamePage()  

    
  }

  startButton.addEventListener('click', startGame)
}
window.addEventListener('DOMContentLoaded', init)