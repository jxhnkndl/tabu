/* GLOBAL VARIABLES */

// Band logo
const h1El = document.querySelector('h1');

// Gameboard
const gameBoardEl = document.querySelector('.game-board');

// Game icons
const allIconsEl = document.querySelectorAll('.game-icon');
const playableIconsEl = document.querySelectorAll('.game-icon-playable');
const firstIconEl = document.querySelector('.first-icon');

// Color bars
const colorBarsEl = document.querySelectorAll('.cell-color');
const colorContainersEl = document.querySelectorAll('.color-container');

// Individual color progress bars
const purpleStatusEl = document.querySelector('.cell-color-purple');
const greenStatusEl = document.querySelector('.cell-color-green');
const yellowStatusEl = document.querySelector('.cell-color-yellow');
const orangeStatusEl = document.querySelector('.cell-color-orange');
const blueStatusEl = document.querySelector('.cell-color-blue');

// Individual color containers
const purpleContainer = colorContainersEl[0];
const greenContainer = colorContainersEl[1];
const yellowContainer = colorContainersEl[2];
const orangeContainer = colorContainersEl[3];
const blueContainer = colorContainersEl[4];

// Gameboard matrix
const gameboard = [
  [
    {
      id: 'cell-1a',
      row: 1, 
      colorFamily: 'green',
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-green/pentagram-green.svg',
      letter: false,
      statusBar: greenStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-1b',
      row: 1,
      colorFamily: 'purple',
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-purple/fingerprint-purple.svg',
      letter: false,
      statusBar: purpleStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-1c',
      row: 1,
      colorFamily: 'yellow',
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-yellow/void-yellow.svg',
      letter: false,
      statusBar: yellowStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-1d',
      row: 1,
      colorFamily: 'orange',
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-orange/pyramid-orange.svg',
      letter: false,
      statusBar: orangeStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-1e',
      row: 1,
      colorFamily: 'blue',
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-blue/inverted-pyramid-blue.svg',
      letter: false,
      statusBar: blueStatusEl,
      revealed: false,
      remaining: 5
    },    
  ],
  [
    {
      id: 'cell-2a',
      row: 2, 
      colorFamily: 'blue',
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-blue/fingerprint-blue.svg',
      letter: './assets/images/letters/letter-t-yellow.svg',
      statusBar: blueStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-2b',
      row: 2,
      colorFamily: 'orange',
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-orange/pentagram-orange.svg',
      letter: './assets/images/letters/letter-a-yellow.svg',
      statusBar: orangeStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-2c',
      row: 2,
      colorFamily: 'green',
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-green/pyramid-green.svg',
      letter: './assets/images/letters/letter-p-yellow.svg',
      statusBar: greenStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-2d',
      row: 2,
      colorFamily: 'yellow',
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-yellow/inverted-pyramid-yellow.svg',
      letter: false,
      statusBar: yellowStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-2e',
      row: 2,
      colorFamily: 'purple',
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-purple/void-purple.svg',
      letter: false,
      statusBar: purpleStatusEl,
      revealed: false,
      remaining: 5
    },  
  ],
  [
    {
      id: 'cell-3a',
      row: 3, 
      colorFamily: 'orange',
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-orange/void-orange.svg',
      letter: false,
      statusBar: orangeStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-3b',
      row: 3,
      colorFamily: 'orange',
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-orange/inverted-pyramid-orange.svg',
      letter: false,
      statusBar: orangeStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-3c',
      row: 3,
      colorFamily: 'purple',
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-purple/pyramid-purple.svg',
      letter: './assets/images/letters/letter-t-yellow.svg',
      statusBar: purpleStatusEl,
      revealed: false,
      remaining: 4
    },
    {
      id: 'cell-3d',
      row: 3,
      colorFamily: 'green',
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-green/fingerprint-green.svg',
      letter: './assets/images/letters/letter-o-yellow.svg',
      statusBar: greenStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-3e',
      row: 3,
      colorFamily: 'blue',
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-blue/pentagram-blue.svg',
      letter: false,
      statusBar: blueStatusEl,
      revealed: false,
      remaining: 5
    },  
  ],
  [
    {
      id: 'cell-4a',
      row: 4, 
      colorFamily: 'yellow',
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-yellow/inverted-pyramid-yellow.svg',
      letter: false,
      statusBar: yellowStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-4b',
      row: 4,
      colorFamily: 'orange',
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-orange/fingerprint-orange.svg',
      letter: './assets/images/letters/letter-p-yellow.svg',
      statusBar: orangeStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-4c',
      row: 4,
      colorFamily: 'blue',
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-blue/void-blue.svg',
      letter: './assets/images/letters/letter-l-yellow.svg',
      statusBar: blueStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-4d',
      row: 4,
      colorFamily: 'purple',
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-purple/pentagram-purple.svg',
      letter: './assets/images/letters/letter-a-yellow.svg',
      statusBar: purpleStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-4e',
      row: 4,
      colorFamily: 'green',
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-green/inverted-pyramid-green.svg',
      letter: './assets/images/letters/letter-y-yellow.svg',
      statusBar: greenStatusEl,
      revealed: false,
      remaining: 5
    },  
  ],
  [
    {
      id: 'cell-5a',
      row: 5, 
      colorFamily: 'purple',
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-purple/inverted-pyramid-purple.svg',
      letter: false,
      statusBar: purpleStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-5b',
      row: 5,
      colorFamily: 'blue',
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-blue/pyramid-blue.svg',
      letter: false,
      statusBar: blueStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-5c',
      row: 5,
      colorFamily: 'yellow',
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-yellow/fingerprint-yellow.svg',
      letter: false,
      statusBar: yellowStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-5d',
      row: 5,
      colorFamily: 'green',
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-green/void-green.svg',
      letter: false,
      statusBar: greenStatusEl,
      revealed: false,
      remaining: 5
    },
    {
      id: 'cell-5e',
      row: 5,
      colorFamily: 'yellow',
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-yellow/pentagram-yellow.svg',
      letter: false,
      statusBar: yellowStatusEl,
      revealed: false,
      remaining: 5
    },  
  ],
];

// General game play variables
let isActiveGame = false;
let firstCell = gameboard[2][2];
let isWinner = false;

// Scoreboard
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