// Gameplay variables
let isActiveGame = false;
let winner = false;
let winningColor;

// Gameboard matrix
const gameboard = [
  [
    {
      id: 'cell-1a',
      row: 1, 
      alt: 'Pentagram',
      dark: '../images/symbols-dark/pentagram-dark.svg',
      color: '../images/symbols-green/pentagram-green.svg',
      winningColor: `../images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-1b',
      row: 1,
      alt: 'Fingerprint',
      dark: '../images/symbols-dark/fingerprint-dark.svg',
      color: '../images/symbols-purple/fingerprint-purple.svg',
      winningColor: `../images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-1c',
      row: 1,
      alt: 'Void',
      dark: '../images/symbols-dark/void-dark.svg',
      color: '../images/symbols-yellow/void-yellow.svg',
      winningColor: `../images/symbols-${winningColor}/void-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-1d',
      row: 1,
      alt: 'Pyramid',
      dark: '../images/symbols-dark/pyramid-dark.svg',
      color: '../images/symbols-orange/pyramid-orange.svg',
      winningColor: `../images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-1e',
      row: 1,
      alt: 'Inverted Pyramid',
      dark: '../images/symbols-dark/inverted-pyramid-dark.svg',
      color: '../images/symbols-blue/inverted-pyramid-blue.svg',
      winningColor: `../images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },    
  ],
  [
    {
      id: 'cell-2a',
      row: 2, 
      alt: 'Fingerprint',
      dark: '../images/symbols-dark/fingerprint-dark.svg',
      color: '../images/symbols-blue/fingerprint-blue.svg',
      winningColor: `../images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: '../images/letters/letter-t-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-2b',
      row: 2,
      alt: 'Pentagram',
      dark: '../images/symbols-dark/pentagram-dark.svg',
      color: '../images/symbols-orange/pentagram-orange.svg',
      winningColor: `../images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: '../images/letters/letter-a-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-2c',
      row: 2,
      alt: 'Pyramid',
      dark: '../images/symbols-dark/pyramid-dark.svg',
      color: '../images/symbols-green/pyramid-green.svg',
      winningColor: `../images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: '../images/letters/letter-p-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-2d',
      row: 2,
      alt: 'Inverted Pyramid',
      dark: '../images/symbols-dark/inverted-pyramid-dark.svg',
      color: '../images/symbols-yellow/inverted-pyramid-yellow.svg',
      winningColor: `../images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-2e',
      row: 2,
      alt: 'Void',
      dark: '../images/symbols-dark/void-dark.svg',
      color: '../images/symbols-purple/void-purple.svg',
      winningColor: `../images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },  
  ],
  [
    {
      id: 'cell-3a',
      row: 3, 
      alt: 'Void',
      dark: '../images/symbols-dark/void-dark.svg',
      color: '../images/symbols-orange/void-orange.svg',
      winningColor: `../images/symbols-${winningColor}/void-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-3b',
      row: 3,
      alt: 'Inverted Pyramid',
      dark: '../images/symbols-dark/inverted-pyramid-dark.svg',
      color: '../images/symbols-orange/inverted-pyramid-orange.svg',
      winningColor: `../images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-3c',
      row: 3,
      alt: 'Pyramid',
      dark: '../images/symbols-dark/pyramid-dark.svg',
      color: '../images/symbols-purple/pyramid-purple.svg',
      winningColor: `../images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: '../images/letters/letter-t-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-3d',
      row: 3,
      alt: 'Fingerprint',
      dark: '../images/symbols-dark/fingerprint-dark.svg',
      color: '../images/symbols-green/fingerprint-green.svg',
      winningColor: `../images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: '../images/letters/letter-o-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-3e',
      row: 3,
      alt: 'Pentagram',
      dark: '../images/symbols-dark/pentagram-dark.svg',
      color: '../images/symbols-blue/pentagram-blue.svg',
      winningColor: `../images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: false,
      revealed: false
    },  
  ],
  [
    {
      id: 'cell-4a',
      row: 4, 
      alt: 'Pyramid',
      dark: '../images/symbols-dark/pyramid-dark.svg',
      color: '../images/symbols-yellow/inverted-pyramid-yellow.svg',
      winningColor: `../images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-4b',
      row: 4,
      alt: 'Fingerprint',
      dark: '../images/symbols-dark/fingerprint-dark.svg',
      color: '../images/symbols-orange/fingerprint-orange.svg',
      winningColor: `../images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: '../images/letters/letter-p-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-4c',
      row: 4,
      alt: 'Void',
      dark: '../images/symbols-dark/void-dark.svg',
      color: '../images/symbols-blue/void-blue.svg',
      winningColor: `../images/symbols-${winningColor}/void-${winningColor}.svg`,
      letter: '../images/letters/letter-l-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-4d',
      row: 4,
      alt: 'Pentagram',
      dark: '../images/symbols-dark/pentagram-dark.svg',
      color: '../images/symbols-purple/pentagram-purple.svg',
      winningColor: `../images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: '../images/letters/letter-a-yellow.svg',
      revealed: false
    },
    {
      id: 'cell-4e',
      row: 4,
      alt: 'Inverted Pyramid',
      dark: '../images/symbols-dark/inverted-pyramid-dark.svg',
      color: '../images/symbols-green/inverted-pyramid-green.svg',
      winningColor: `../images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: '../images/letters/letter-y-yellow.svg',
      revealed: false
    },  
  ],
  [
    {
      id: 'cell-5a',
      row: 5, 
      alt: 'Inverted Pyramid',
      dark: '../images/symbols-dark/inverted-pyramid-dark.svg',
      color: '../images/symbols-purple/inverted-pyramid-purple.svg',
      winningColor: `../images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-5b',
      row: 5,
      alt: 'Pyramid',
      dark: '../images/symbols-dark/pyramid-dark.svg',
      color: '../images/symbols-blue/pyramid-blue.svg',
      winningColor: `../images/symbols-${winningColor}/pyramid-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-5c',
      row: 5,
      alt: 'Fingerprint',
      dark: '../images/symbols-dark/fingerprint-dark.svg',
      color: '../images/symbols-yellow/fingerprint-yellow.svg',
      winningColor: `../images/symbols-${winningColor}/fingerprint-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-5d',
      row: 5,
      alt: 'Void',
      dark: '../images/symbols-dark/void-dark.svg',
      color: '../images/symbols-green/void-green.svg',
      winningColor: `../images/symbols-${winningColor}/void-${winningColor}.svg`,
      letter: false,
      revealed: false
    },
    {
      id: 'cell-5e',
      row: 5,
      alt: 'Pentagram',
      dark: '../images/symbols-dark/pentagram-dark.svg',
      color: '../images/symbols-yellow/pentagram-yellow.svg',
      winningColor: `../images/symbols-${winningColor}/pentagram-${winningColor}.svg`,
      letter: false,
      revealed: false
    },  
  ],
];
