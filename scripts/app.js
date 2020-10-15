function init(){

  const startButton = document.querySelector('.start')
  const restartButton = document.querySelector('.restart')
  const grid = document.querySelector('.grid')
  const blurb = document.querySelector('.container-2')
  const title = document.querySelector('.title')

  const cells = []
  const width = 10
  const numberOfCells = width * width
  let chosenBugs = differentBugs()
  let bugPosition = 0
  console.log(chosenBugs)
  const bugs = ['bugOne','bugTwo','bugFour','bugSix','bugSeven','bugEight','bugNine','bugTen','bugEleven','bugTwelve']

  //change home page to game page
  function gamePage(){
    startButton.remove()
    restartButton.remove()
    blurb.remove()
    title.remove()
  }

  console.log(bugs[1])
  console.log(bugs)
 

  function differentBugs() {
    const bugs = ['bugOne','bugTwo','bugFour','bugSix','bugSeven','bugEight','bugNine','bugTen','bugEleven','bugTwelve']
    return bugs[Math.floor(Math.random() * bugs.length)]   
  } 

  function handleClick(e){
    if (e.target.classList.contains(chosenBugs)) {
      console.log(chosenBugs)
      e.target.classList.remove(chosenBugs)
    } 
    for (let i = 0; i < bugs.length; i++) {
      if (e.target.classList.contains(bugs[i])) {
        console.log(bugs[i])
        e.target.classList.remove(bugs[i])
      } 
    }
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
      bugPosition = Math.floor(Math.random() * numberOfCells) 
      chosenBugs = differentBugs()
      cells[bugPosition].classList.add(chosenBugs)
      // console.log(differentBugs) 
    }, 1000)


  }
  startButton.addEventListener('click', startGame)
  grid.addEventListener('click', handleClick)
}
window.addEventListener('DOMContentLoaded', init )