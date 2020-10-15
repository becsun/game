function init(){

  const startButton = document.querySelector('.start')
  const restartButton = document.querySelector('.restart')
  const grid = document.querySelector('.grid')
  const blurb = document.querySelector('.container-2')
  const title = document.querySelector('.title')

  const cells = []
  const width = 10
  const numberOfCells = width * width
  let bugOnePosition = 0

  //change home page to game page
  function gamePage(){
    startButton.remove()
    restartButton.remove()
    blurb.remove()
    title.remove()
  }
  function startGame() {
    gamePage()  

    for (let i = 0; i < numberOfCells; i++ ){
      const cell = document.createElement('div')
      cells.push(cell)
      grid.appendChild(cell)
    } 

    //random bug popping up.
    setInterval(() => {
      bugOnePosition = Math.floor(Math.random() * numberOfCells)
      const bugs = ['bugOne','bugTwo','bugFour','bugSix','bugSeven','bugEight','bugNine','bugTen','bugEleven','bugTwelve']
      const differentBugs = bugs[Math.floor(Math.random() * bugs.length)]
      cells[bugOnePosition].classList.add(differentBugs)
      console.log(differentBugs)
    }, 1000)
    
  }
  startButton.addEventListener('click', startGame)
}
window.addEventListener('DOMContentLoaded', init)