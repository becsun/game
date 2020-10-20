function init(){

  const startButton = document.querySelector('.start')
  const restartButton = document.querySelector('.restart')
  const grid = document.querySelector('.grid')
  const blurb = document.querySelector('.container-2')
  const title = document.querySelector('.title')
  const bugGrid = document.querySelector('.grid-2')

  const cells = []
  const bugCells = []
  const width = 10
  const numberOfCells = width * width
  const buggieCells = width / 2
  let chosenBugs = differentBugs()
  let bugPosition = 0
  const targetBugPosition = 0
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
  function randomBugsToKill(){
    for (let i = 0; i < buggieCells; i++ ){
      const randomBug = bugs[Math.floor(Math.random() * bugs.length)]  
      bugCells[i].classList.add(randomBug)
      
    }
    console.log(bugCells)
  }
  function startGame() {
    gamePage()  


    for (let i = 0; i < numberOfCells; i++ ){
      const cell = document.createElement('div')
      cells.push(cell)
      grid.appendChild(cell)
    } 


    for (let i = 0; i < buggieCells; i++ ){
      const bugCell = document.createElement('p')
      bugCells.push(bugCell)
      bugGrid.appendChild(bugCell)
    } 


    //random bug popping up.
    setInterval(() => {
      bugPosition = Math.floor(Math.random() * numberOfCells) 
      chosenBugs = differentBugs()
      cells[bugPosition].classList.add(chosenBugs)
      // console.log(differentBugs) 
    }, 1000)

    randomBugsToKill()
    
  }
  startButton.addEventListener('click', startGame)
  grid.addEventListener('click', handleClick)
}
window.addEventListener('DOMContentLoaded', init )