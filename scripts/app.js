function init() {

  const startButton = document.querySelector('.start')
  const restartButton = document.querySelector('.restart')
  const grid = document.querySelector('.grid')
  const blurb = document.querySelector('.container-2')
  const title = document.querySelector('.title')
  const bugGrid = document.querySelector('.grid-2')
  const gameOver = document.querySelector('.game-over')
  const removeGrid = document.querySelector('.grid-wrapper')
  const score = document.querySelector('.score')
  

  
  const gameGridCells = []
  const bugGridCells = []
  const width = 10
  const numberOfCellsForTheGameGrid = width * width
  const numberOfBugCells = width / 2
  let startScore = 100

  grid.style.backgroundImage = 'none'
  gameOver.style.display = 'none'
  const bugs = ['bugOne', 'bugTwo', 'bugFour', 'bugSix', 'bugSeven', 'bugEight', 'bugNine', 'bugTen', 'bugEleven', 'bugTwelve']
  

  function freshPageForNewGame(){
    window.location.reload()
  }
  //change home page to game page
  function gamePage() {
    startButton.remove()
    restartButton.style.display = 'none'
    blurb.remove()
    title.remove()
    grid.style.backgroundImage = 'url("https://res.cloudinary.com/do68wjft3/image/upload/c_scale,h_500,w_500/v1604682246/cloud_hmvofs.jpg")'
  }


  function addIndividualBugToTheGrid() {
    const bugs = ['bugOne', 'bugTwo', 'bugFour', 'bugSix', 'bugSeven', 'bugEight', 'bugNine', 'bugTen', 'bugEleven', 'bugTwelve']
    return bugs[Math.floor(Math.random() * bugs.length)]
  }

  function handleClick(e) {
    // Check to see if there is a bug in the cell by inspecting the className (classList[0]) 
    console.log(e.target.classList)
    if (e.target.classList[0] !== null) {
      // Pop the bug name in a variable for convenience
      const bug = e.target.classList[0]

      // Iterate over the bugGrid cells to see if the bug we clicked on matches
      for (let i = 0; i <= bugGridCells.length; i++) {
        // If the bugGrid cell isn't empty and matches the bug, we can remove the bug from both places
        if ((bugGridCells[i].classList[0] !== null) && (bugGridCells[i].classList[0] === bug)) {
          // Remove bug from bug grid
        
          bugGridCells[i].className = ''
          // Remove bug from main grid
          e.target.className = ''
          score.innerHTML = startScore
          startScore += 1000
        }
        const allBugCellsEmpty = bugGridCells.every((bugCell) => {
          return bugCell.className === '' 
        })
        if (allBugCellsEmpty){
          populateRandomFiveBugs()
        }
      }
    }
  } 

  function populateRandomFiveBugs() {
    for (let i = 0; i < numberOfBugCells; i++) {
      const randomBug = bugs[Math.floor(Math.random() * bugs.length)]
      bugGridCells[i].classList.add(randomBug)
    }
  }

  function startGame() {
    gamePage()
    // removeGrid.style.display = 'initial'
    for (let i = 0; i < numberOfCellsForTheGameGrid; i++) {
      const cell = document.createElement('div')
      gameGridCells.push(cell)
      grid.appendChild(cell)
    }
    for (let i = 0; i < numberOfBugCells; i++) {
      const bugCell = document.createElement('p')
      bugGridCells.push(bugCell)
      bugGrid.appendChild(bugCell)
    }

    //random bug popping up.
    const timerForAddingBugsToTheBugGrid = setInterval(() => {
      //make a new array for only empty cells.
      const emptyCells = gameGridCells.filter(cell => {
        return cell.className === ''
      })
      const randomEmptyCell = emptyCells[Math.floor(Math.random() * emptyCells.length)] 
      if (emptyCells.length === 0) {
        restartButton.style.display = 'initial'
        gameOver.style.display = 'initial'
        clearInterval(timerForAddingBugsToTheBugGrid)      
      
      } 
      randomEmptyCell.classList.add(addIndividualBugToTheGrid())
      console.log(emptyCells.length)
  
    }, 200)

    populateRandomFiveBugs()


  }
  restartButton.addEventListener('click', freshPageForNewGame)
  startButton.addEventListener('click', startGame)
  grid.addEventListener('click', handleClick)
}
window.addEventListener('DOMContentLoaded', init)
