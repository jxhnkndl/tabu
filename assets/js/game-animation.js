const gameBoardEl = document.querySelector('.game-board');
const colorBarsEl = document.querySelectorAll('.cell-color');
const allIconsEl = document.querySelectorAll('.game-icon');
const playableIconsEl = document.querySelectorAll('.game-icon-playable');

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

const resetColorBars = () => {
  console.log(colorBarsEl);
  colorBarsEl[0].classList.replace('light-bg', 'purple-bg');
  colorBarsEl[1].classList.replace('daisy-bg', 'green-bg');
  colorBarsEl[3].classList.replace('sunset-bg', 'orange-bg');
  colorBarsEl[4].classList.replace('orange-bg', 'blue-bg');
};

const introAnimation = gsap.to(allIconsEl, {
  opacity: 1,
  duration: 0.5,
  yoyo: true,
  repeat: -1,
  stagger: 0.05,
  ease: 'easeInOut',
});

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
