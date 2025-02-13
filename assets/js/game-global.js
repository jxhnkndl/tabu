/* GLOBAL VARIABLES */

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

// Dynamic winning color to insert into icon paths during retheming
let winningColor;

// Gameboard matrix
const gameboard = [
  [
    {
      id: 'cell-1a',
      row: 1, 
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-green/pentagram-green.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-1b',
      row: 1,
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-purple/fingerprint-purple.svg',
      winningColor: `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-1c',
      row: 1,
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-yellow/void-yellow.svg',
      winningColor: `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-1d',
      row: 1,
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-orange/pyramid-orange.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-1e',
      row: 1,
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-blue/inverted-pyramid-blue.svg',
      winningColor: `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },    
  ],
  [
    {
      id: 'cell-2a',
      row: 2, 
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-blue/fingerprint-blue.svg',
      winningColor: `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: './assets/images/letters/letter-t-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-2b',
      row: 2,
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-orange/pentagram-orange.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: './assets/images/letters/letter-a-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-2c',
      row: 2,
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-green/pyramid-green.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: './assets/images/letters/letter-p-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-2d',
      row: 2,
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-yellow/inverted-pyramid-yellow.svg',
      winningColor: `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-2e',
      row: 2,
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-purple/void-purple.svg',
      winningColor: `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },  
  ],
  [
    {
      id: 'cell-3a',
      row: 3, 
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-orange/void-orange.svg',
      winningColor: `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-3b',
      row: 3,
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-orange/inverted-pyramid-orange.svg',
      winningColor: `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-3c',
      row: 3,
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-purple/pyramid-purple.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: './assets/images/letters/letter-t-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-3d',
      row: 3,
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-green/fingerprint-green.svg',
      winningColor: `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: './assets/images/letters/letter-o-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-3e',
      row: 3,
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-blue/pentagram-blue.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: false,
      revealed: false
    },  
  ],
  [
    {
      id: 'cell-4a',
      row: 4, 
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-yellow/inverted-pyramid-yellow.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-4b',
      row: 4,
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-orange/fingerprint-orange.svg',
      winningColor: `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: './assets/images/letters/letter-p-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-4c',
      row: 4,
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-blue/void-blue.svg',
      winningColor: `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`,
      letter: './assets/images/letters/letter-l-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-4d',
      row: 4,
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-purple/pentagram-purple.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: './assets/images/letters/letter-a-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-4e',
      row: 4,
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-green/inverted-pyramid-green.svg',
      winningColor: `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: './assets/images/letters/letter-y-yellow.svg',
      revealed: false
    },  
  ],
  [
    {
      id: 'cell-5a',
      row: 5, 
      alt: 'Inverted Pyramid',
      dark: './assets/images/symbols-dark/inverted-pyramid-dark.svg',
      color: './assets/images/symbols-purple/inverted-pyramid-purple.svg',
      winningColor: `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-5b',
      row: 5,
      alt: 'Pyramid',
      dark: './assets/images/symbols-dark/pyramid-dark.svg',
      color: './assets/images/symbols-blue/pyramid-blue.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-5c',
      row: 5,
      alt: 'Fingerprint',
      dark: './assets/images/symbols-dark/fingerprint-dark.svg',
      color: './assets/images/symbols-yellow/fingerprint-yellow.svg',
      winningColor: `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-5d',
      row: 5,
      alt: 'Void',
      dark: './assets/images/symbols-dark/void-dark.svg',
      color: './assets/images/symbols-green/void-green.svg',
      winningColor: `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-5e',
      row: 5,
      alt: 'Pentagram',
      dark: './assets/images/symbols-dark/pentagram-dark.svg',
      color: './assets/images/symbols-yellow/pentagram-yellow.svg',
      winningColor: `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: false,
      revealed: false
    },  
  ],
];

// General game play variables
let isActiveGame = false;
let firstCell = gameboard[2][2];
let winner = false;

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