/**** GLOBALS ****/

const gameBoardEl = document.querySelector('.game-board');
const allIconsEl = document.querySelectorAll('.game-icon');
const playableIconsEl = document.querySelectorAll('.game-icon-playable');
const firstIconEl = document.querySelector('.first-icon');
const colorBarsEl = document.querySelectorAll('.cell-color');
const colorContainersEl = document.querySelectorAll('.color-container');
const purpleStatusEl = document.querySelector('.cell-color-purple');
const greenStatusEl = document.querySelector('.cell-color-green');
const yellowStatusEl = document.querySelector('.cell-color-yellow');
const orangeStatusEl = document.querySelector('.cell-color-orange');
const blueStatusEl = document.querySelector('.cell-color-blue');

const gameMatrix = [
  [
    {
      id: 'cell-1a',
      row: 1,
      color: 'green',
      iconPath: './assets/images/symbols-green/pentagram-green.svg',
      revealed: false,
    },
    {
      id: 'cell-1b',
      row: 1,
      color: 'purple',
      iconPath: './assets/images/symbols-purple/fingerprint-purple.svg',
      revealed: false,
    },
    {
      id: 'cell-1c',
      row: 1,
      color: 'yellow',
      iconPath: './assets/images/symbols-yellow/void-yellow.svg',
      revealed: false,
    },
    {
      id: 'cell-1d',
      row: 1,
      color: 'orange',
      iconPath: './assets/images/symbols-orange/pyramid-orange.svg',
      revealed: false,
    },
    {
      id: 'cell-1e',
      row: 1,
      color: 'blue',
      iconPath: './assets/images/symbols-blue/inverted-pyramid-blue.svg',
      revealed: false,
    },
  ],
  [
    {
      id: 'cell-2a',
      row: 2,
      color: 'blue',
      iconPath: './assets/images/symbols-blue/fingerprint-blue.svg',
      revealed: false,
    },
    {
      id: 'cell-2b',
      row: 2,
      color: 'orange',
      iconPath: './assets/images/symbols-orange/pentagram-orange.svg',
      revealed: false,
    },
    {
      id: 'cell-2c',
      row: 2,
      color: 'green',
      iconPath: './assets/images/symbols-green/pyramid-green.svg',
      revealed: false,
    },
    {
      id: 'cell-2d',
      row: 2,
      color: 'yellow',
      iconPath: './assets/images/symbols-yellow/inverted-pyramid-yellow.svg',
      revealed: false,
    },
    {
      id: 'cell-2e',
      row: 2,
      color: 'purple',
      iconPath: './assets/images/symbols-purple/void-purple.svg',
      revealed: false,
    },
  ],
  [
    {
      id: 'cell-3a',
      row: 3,
      color: 'orange',
      iconPath: './assets/images/symbols-orange/void-orange.svg',
      revealed: false,
    },
    {
      id: 'cell-3b',
      row: 3,
      color: 'orange',
      iconPath: './assets/images/symbols-orange/inverted-pyramid-orange.svg',
      revealed: false,
    },
    {
      id: 'cell-3c',
      row: 3,
      color: 'purple',
      iconPath: './assets/images/symbols-purple/pyramid-purple.svg',
      revealed: false,
    },
    {
      id: 'cell-3d',
      row: 3,
      color: 'green',
      iconPath: './assets/images/symbols-green/fingerprint-green.svg',
      revealed: false,
    },
    {
      id: 'cell-3e',
      row: 3,
      color: 'blue',
      iconPath: './assets/images/symbols-blue/pentagram-blue.svg',
      revealed: false,
    },
  ],
  [
    {
      id: 'cell-4a',
      row: 4,
      color: 'yellow',
      iconPath: './assets/images/symbols-yellow/pyramid-yellow.svg',
      revealed: false,
    },
    {
      id: 'cell-4b',
      row: 4,
      color: 'orange',
      iconPath: './assets/images/symbols-orange/fingerprint-orange.svg',
      revealed: false,
    },
    {
      id: 'cell-4c',
      row: 4,
      color: 'blue',
      iconPath: './assets/images/symbols-blue/void-blue.svg',
      revealed: false,
    },
    {
      id: 'cell-4d',
      row: 4,
      color: 'purple',
      iconPath: './assets/images/symbols-purple/pentagram-purple.svg',
      revealed: false,
    },
    {
      id: 'cell-4e',
      row: 4,
      color: 'green',
      iconPath: './assets/images/symbols-green/inverted-pyramid-green.svg',
      revealed: false,
    },
  ],
  [
    {
      id: 'cell-5a',
      row: 5,
      color: 'purple',
      iconPath: './assets/images/symbols-purple/inverted-pyramid-purple.svg',
      revealed: false,
    },
    {
      id: 'cell-5b',
      row: 5,
      color: 'blue',
      iconPath: './assets/images/symbols-blue/pyramid-blue.svg',
      revealed: false,
    },
    {
      id: 'cell-5c',
      row: 5,
      color: 'yellow',
      iconPath: './assets/images/symbols-yellow/fingerprint-yellow.svg',
      revealed: false,
    },
    {
      id: 'cell-5d',
      row: 5,
      color: 'green',
      iconPath: './assets/images/symbols-green/void-green.svg',
      revealed: false,
    },
    {
      id: 'cell-5e',
      row: 5,
      color: 'yellow',
      iconPath: './assets/images/symbols-yellow/pentagram-yellow.svg',
      revealed: false,
    },
  ],
];

const scoreboard = {
  purple: {
    remaining: 5,
    statusBar: purpleStatusEl,
  },
  green: {
    remaining: 5,
    statusBar: greenStatusEl,
  },
  yellow: {
    remaining: 5,
    statusBar: yellowStatusEl,
  },
  orange: {
    remaining: 5,
    statusBar: orangeStatusEl,
  },
  blue: {
    remaining: 5,
    statusBar: blueStatusEl,
  },
};

let activeGame = false;
let winner = false;

/**** GAME LOGIC ****/

// capture user clicks
gameBoardEl.addEventListener('click', (e) => {
  let clickedEl = e.target;
  let clickedCell;

  // ensure icon's parent cell is the captured target element
  if (clickedEl.classList.contains('cell')) {
    clickedCell = clickedEl;
  } else if (clickedEl.parentElement.classList.contains('cell')) {
    clickedCell = clickedEl.parentElement;
  }

  // match clicked icon with matching icon in game matrix
  if (clickedCell && !winner && activeGame) {
    let cellId = clickedCell.classList[1];
    let rowId = cellId.split('-')[1].split('')[0];
    let matchingRow = gameMatrix[rowId - 1];

    let matchingCell = matchingRow.find((cell) => {
      return cell.id === cellId && !cell.revealed;
    });

    handleIconClick(clickedCell, matchingCell);
  }
});

// update ui and game state after icon click
const handleIconClick = (clickedCell, matchingCell) => {
  // fade dark icon out of viewport
  gsap.to(clickedCell, {
    opacity: 0,
    duration: 0.25,
    ease: 'power3.inOut',
  });

  // reset the game icon's src to the colored icon
  // fade icon back into viewport
  setTimeout(() => {
    clickedCell.children[0].src = matchingCell.iconPath;

    gsap.to(clickedCell, {
      opacity: 1,
      duration: 0.25,
      ease: 'power3.inOut',
    });
  }, 250);

  // increase color's click count and status bar
  updateScore(clickedCell, matchingCell);
};

// update color status bars
const updateScore = (clickedCell, matchingCell) => {
  const color = matchingCell.color;

  if (scoreboard[color].remaining > 0) {
    scoreboard[color].remaining -= 1;

    let status = (100 / 5) * scoreboard[color].remaining;

    gsap.to(scoreboard[color].statusBar, {
      scaleX: status / 100,
      duration: 0.5,
      ease: 'power3.inOut',
    });
  }

  console.log(scoreboard);
};

/**** INTRO ANIMATIONS ****/

// intro opacity wave
const introAnimation = gsap
  .to(allIconsEl, {
    opacity: 0.5,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    stagger: 0.05,
    ease: 'power3.inOut',
  })
  .repeatDelay(0.25);

// swap game icon classes to set board for game play
const resetBoard = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      allIconsEl.forEach((icon) => {
        icon.classList.remove('game-icon-init');

        if (icon.classList.contains('game-icon-decorative')) {
          icon.classList.add('game-icon-hidden');
        }

        if (icon.classList.contains('game-icon-playable')) {
          icon.classList.remove('game-icon-hidden');
        }
      });

      resetColorBars();

      resolve();
    }, 3000);
  });
};

// reset color bars from init to match playable icon colors
const resetColorBars = () => {
  colorBarsEl[0].classList.replace('light-bg', 'purple-bg');
  colorBarsEl[1].classList.replace('daisy-bg', 'green-bg');
  colorBarsEl[3].classList.replace('sunset-bg', 'orange-bg');
  colorBarsEl[4].classList.replace('orange-bg', 'blue-bg');

  colorContainersEl[0].classList.add('purple-border');
  colorContainersEl[1].classList.add('green-border');
  colorContainersEl[2].classList.add('yellow-border');
  colorContainersEl[3].classList.add('orange-border');
  colorContainersEl[4].classList.add('blue-border');
};

// set up browser to make first play
const revealFirstIcon = () => {
  const matchingCell = gameMatrix[2][2];

  handleIconClick(firstIconEl, matchingCell);
};

// reset the game board from init to playable on click
const handleGameBoardReset = async () => {
  introAnimation.kill();

  gsap
    .to(allIconsEl, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    .then(() => {
      gsap.to(colorBarsEl, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.inOut',
      });
    })
    .then(() => {
      gsap.to(colorContainersEl, {
        opacity: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: 'power3.inOut',
      })
    });

  await resetBoard();

  gsap
    .to(playableIconsEl, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    .then(() => {
      gsap.to(colorContainersEl, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.inOut',
      });
    })
    .then(() => {
      gsap.to(colorBarsEl, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.inOut',
      }).delay(0.5);
    });

  activeGame = true;

  setTimeout(() => {
    revealFirstIcon();
  }, 3000);

  gameBoardEl.removeEventListener('click', handleGameBoardReset);
};

gameBoardEl.addEventListener('click', handleGameBoardReset);
