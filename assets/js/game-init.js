// Intro opacity wave animation
const introAnimation = gsap
  .to(allIconsEl, {
    opacity: 0.5,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    stagger: 0.05,
    ease: 'power2.in',
  })
  .repeatDelay(0.25);

// Swap game icon classes to set board for game play
const swapGameIconClasses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      allIconsEl.forEach((icon) => {
        icon.classList.remove('game-icon-init');

        // hide decorative icons (letters, extra dark icons)
        if (icon.classList.contains('game-icon-decorative')) {
          icon.classList.add('game-icon-hidden');
        }

        // reveal hidden playable icons
        if (icon.classList.contains('game-icon-playable')) {
          icon.classList.remove('game-icon-hidden');
        }
      });

      drawColorBars();

      resolve();
    }, 3000);
  });
};

// Reset color bars from init to match playable icon colors
const drawColorBars = () => {
  colorBarsEl[0].classList.replace('yellow-100-bg', 'purple-bg');
  colorBarsEl[1].classList.replace('yellow-300-bg', 'green-bg');
  colorBarsEl[2].classList.replace('yellow-500-bg', 'yellow-bg');
  colorBarsEl[3].classList.replace('yellow-700-bg', 'orange-bg');
  colorBarsEl[4].classList.replace('yellow-theme-accent-bg', 'blue-bg');

  colorContainersEl[0].classList.add('purple-border');
  colorContainersEl[1].classList.add('green-border');
  colorContainersEl[2].classList.add('yellow-border');
  colorContainersEl[3].classList.add('orange-border');
  colorContainersEl[4].classList.add('blue-border');
};

// Reveal first icon
const revealFirstIcon = () => {
  handleIconClick(firstIconEl);
}

// Reset the game board from init to playable on click
const handleGameBoardReset = async () => {
  introAnimation.kill();

  const fadeOutTimeline = gsap.timeline();
  const fadeInTimeline = gsap.timeline();

  // Fade out game icons and color bars before reset
  fadeOutTimeline
    .to(allIconsEl, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    .to(colorBarsEl, {
      opacity: 0,
      duration: 0,
      stagger: 0.05,
      ease: 'power3.inOut',
    }, ">")
    .to(colorContainersEl, {
      opacity: 0,
      duration: 0.25,
      stagger: 0.05,
      ease: 'power3.inOut',
    });

  // Reset theme of the color bars
  await swapGameIconClasses();

  // Fade game icons and color bars back in
  fadeInTimeline
    .to(playableIconsEl, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    .to(colorContainersEl, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.inOut',
    }).to(colorBarsEl, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.inOut',
    }).delay(0.5);

    setTimeout(() => {
      revealFirstIcon();
    }, 4000);

  // Enable the game board to be playable (clickable)
  isActiveGame = true;

  // Prevent future clicks from triggering intro animation
  gameBoardEl.removeEventListener('click', handleGameBoardReset);
};

// handle initial theme reset on first game board click
gameBoardEl.addEventListener('click', handleGameBoardReset);
