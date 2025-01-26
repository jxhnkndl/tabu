// dom elements

const gameBoardEl = document.querySelector('.game-board');
const colorBarsEl = document.querySelectorAll('.cell-color');
const allIconsEl = document.querySelectorAll('.game-icon');
const playableIconsEl = document.querySelectorAll('.game-icon-playable');

// game logic variables

const gameIcons = [
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

/**** ANIMATIONS ****/

// intro opacity wave
const introAnimation = gsap.to(allIconsEl, {
  opacity: 1,
  duration: 0.5,
  yoyo: true,
  repeat: -1,
  stagger: 0.05,
  ease: 'easeInOut',
});

// swap game icon classes to set board for game play
const resetBoard = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      allIconsEl.forEach((icon) => {
        icon.classList.remove('game-icon-init');

        if (
          icon.classList.contains('letter') ||
          icon.classList.contains('dead-symbol')
        ) {
          icon.classList.add('game-icon-hidden');
        }

        if (
          icon.classList.contains('game-icon-hidden') &&
          icon.classList.contains('game-icon-playable')
        ) {
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
  console.log(colorBarsEl);
  colorBarsEl[0].classList.replace('light-bg', 'purple-bg');
  colorBarsEl[1].classList.replace('daisy-bg', 'green-bg');
  colorBarsEl[3].classList.replace('sunset-bg', 'orange-bg');
  colorBarsEl[4].classList.replace('orange-bg', 'blue-bg');
};

// reset the game board from init to playable on click
const handleGameBoardReset = async () => {
  introAnimation.kill();

  gsap
    .to(allIconsEl, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'easeInOut',
    })
    .then(() => {
      gsap.to(colorBarsEl, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'easeInOut',
      });
    });

  await resetBoard();

  console.log('BOARD RESET');

  gsap
    .to(playableIconsEl, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'easeInOut',
    })
    .then(() => {
      gsap.to(colorBarsEl, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'easeInOut',
      });
    });

  gameBoardEl.removeEventListener('click', handleGameBoardReset);
};

gameBoardEl.addEventListener('click', handleGameBoardReset);
