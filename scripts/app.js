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
  let chosenBugs = null
  let bugPosition = 0
  // console.log(chosenBugs)
  
  const bugs = ['bugOne','bugTwo','bugFour','bugSix','bugSeven','bugEight','bugNine','bugTen','bugEleven','bugTwelve']
  const randomBug = null
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
    
    bugCells.filter(bug => e.target.classList.contains(bug))

    


    console.log(bugCells[bugPosition])
    console.log(bugCells)
    console.log(cells[bugPosition])
    console.log(chosenBugs)
    console.log(bugs)
    
  }
  //   console.log(randomBug)

  //   for (let i = 0; i < bugs.length; i++) {
  //     if (e.target.classList.contains(cells[bugPosition]) === bugCells[randomBug]) {
        
  //       e.target.classList.remove(cells[bugPosition])
  //     } 
  //     console.log(cells[bugPosition])
  //   }
  // }

  function randomBugsToKill(){
    for (let i = 0; i < buggieCells; i++ ){
      const randomBug = bugs[Math.floor(Math.random() * bugs.length)]  
      bugCells[i].classList.add(randomBug)
    }
    console.log(randomBug)
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
      // if (cells[bugPosition].classList.contains(chosenBugs)){
      //   return
      // }
    }, 1000)

    randomBugsToKill()
    
  }
  startButton.addEventListener('click', startGame)
  grid.addEventListener('click', handleClick)
}
window.addEventListener('DOMContentLoaded', init )