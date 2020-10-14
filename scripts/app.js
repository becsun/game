function init(){

  const startButton = document.querySelector('.start')
  const restartButton = document.querySelector('.restart')
  const grid = document.querySelector('.grid')
  const blurb = document.querySelector('.container-2')
  const title = document.querySelector('.title')

  const cells = []
  const width = 10
  const numberOfCells = width * width

  //change home page to game page
  function gamePage(){
    startButton.remove()
    restartButton.remove()
    blurb.remove()
    title.remove()
  }
  function startGame () {
    gamePage()  

    for (let i = 0; i < numberOfCells; i++ ){
      const cell = document.createElement('div')
      cells.push(cell)
      grid.appendChild(cell)
      console.log() 
    } 
  }

  startButton.addEventListener('click', startGame)
}
window.addEventListener('DOMContentLoaded', init)