// Event delegation taking gameboard clicks and mapping them to specific cells
const handleGameBoardClick = (e) => {
  const clickedEl = e.target;
  let clickedCell;

  // Capture parent cell of the game icon
  if (clickedEl.classList.contains('cell')) {
    clickedCell = clickedEl
  } else if (clickedEl.parentElement.classList.contains('cell')) {
    clickedCell = clickedEl.parentElement;
  }

  // Prevent icon clicks from triggering color changes before game has started
  if (clickedCell && !isWinner && isActiveGame) {
    handleIconClick(clickedCell)
  }
}

// Handle icon clicks on gameboard
const handleIconClick = (clickedCell) => {  
  const matrixCell = gameboard.flat().find((cell) => cell.id === clickedCell?.classList[1]);

  if (!matrixCell.revealed) {
    matrixCell.revealed = true;

    gsap.to(clickedCell, {
      opacity: 0,
      scale: 0.98,
      duration: 0.25,
      ease: 'power3.inOut'
    });
  
    setTimeout(() => {
      const icon = clickedCell.children[0]
  
      // Swap dark icon with colored icon
      icon.src = matrixCell.color;
      matrixCell.revealed = true;
  
      gsap.to(clickedCell, {
        opacity: 1,
        duration: 0.25,
        ease: 'power3.inOut',
      });
    }, 250);
  
    updateStatusBars(clickedCell, matrixCell);
  }
}

const updateStatusBars = (clickedCell, matrixCell) => {
  const color = matrixCell.colorFamily;

  if (scoreboard[color].remaining > 0) {
    scoreboard[color].remaining -= 1;

    // Calculate percentage of numbero of remaining icons for animating progress bar
    let progress = (100 / 5) * scoreboard[color].remaining;

    gsap.to(matrixCell.statusBar, {
      scaleX: progress / 100,
      duration: 0.5,
      ease: 'power3.inOut',
    });
  }
}

gameBoardEl.addEventListener('click', handleGameBoardClick);