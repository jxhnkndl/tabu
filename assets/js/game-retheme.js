// Winning Color
let winningColor;

// Cells
const img1a = document.querySelector('.cell-1a').children[0];
const img1b = document.querySelector('.cell-1b').children[0];
const img1c = document.querySelector('.cell-1c').children[0];
const img1d = document.querySelector('.cell-1d').children[0];
const img1e = document.querySelector('.cell-1e').children[0];

const img2a = document.querySelector('.cell-2a').children[0];
const img2b = document.querySelector('.cell-2b').children[0];
const img2c = document.querySelector('.cell-2c').children[0];
const img2d = document.querySelector('.cell-2d').children[0];
const img2e = document.querySelector('.cell-2e').children[0];

const img3a = document.querySelector('.cell-3a').children[0];
const img3b = document.querySelector('.cell-3b').children[0];
const img3c = document.querySelector('.cell-3c').children[0];
const img3d = document.querySelector('.cell-3d').children[0];
const img3e = document.querySelector('.cell-3e').children[0];

const img4a = document.querySelector('.cell-4a').children[0];
const img4b = document.querySelector('.cell-4b').children[0];
const img4c = document.querySelector('.cell-4c').children[0];
const img4d = document.querySelector('.cell-4d').children[0];
const img4e = document.querySelector('.cell-4e').children[0];

const img5a = document.querySelector('.cell-5a').children[0];
const img5b = document.querySelector('.cell-5b').children[0];
const img5c = document.querySelector('.cell-5c').children[0];
const img5d = document.querySelector('.cell-5d').children[0];
const img5e = document.querySelector('.cell-5e').children[0];

// Check winning conditions
const checkWinner = () => {
  Object.keys(scoreboard).forEach((color) => {
    if (scoreboard[color].remaining === 0) {
      isWinner = true;
      winningColor = color;
      applyTheme();
    }
  });
};

const applyTheme = () => {
  if (isWinner) {
    animateIcons();
  }
};

const animateIcons = async () => {
  const fadeOutTimeline = gsap.timeline();
  const fadeInTimeline = gsap.timeline();

  fadeOutTimeline
    .to(allIconsEl, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    .to(
      colorBarsEl,
      {
        opacity: 0,
        duration: 0,
        stagger: 0.05,
        ease: 'power3.inOut',
      },
      '>'
    )
    .to(colorContainersEl, {
      opacity: 0,
      duration: 0.25,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    .to(h1El, {
      opacity: 0,
      duration: 0.25,
      ease: 'power3.inOut'
    });

  await swapIcons();

  fadeInTimeline
    .to(h1El, {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.inOut'
    })
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
    })
    .to(colorBarsEl, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.inOut',
    })
    .delay(0.5);
};

// Reset icons with winning color
const swapIcons = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      h1El.classList.remove('yellow-text');
      h1El.classList.add(`logo-${winningColor}`);

      img1a.src = `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`;
      img1b.src = `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`;
      img1c.src = `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`;
      img1d.src = `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`;
      img1e.src = `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`;

      img2a.src = `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`;
      img2b.src = `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`;
      img2c.src = `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`;
      img2d.src = `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`;
      img2e.src = `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`;

      img3a.src = `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`;
      img3b.src = `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`;
      img3c.src = `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`;
      img3d.src = `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`;
      img3e.src = `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`;

      img4a.src = `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`;
      img4b.src = `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`;
      img4c.src = `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`;
      img4d.src = `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`;
      img4e.src = `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`;

      img5a.src = `./assets/images/symbols-${winningColor}/inverted-pyramid-${winningColor}.svg`;
      img5b.src = `./assets/images/symbols-${winningColor}/pyramid-${winningColor}.svg`;
      img5c.src = `./assets/images/symbols-${winningColor}/fingerprint-${winningColor}.svg`;
      img5d.src = `./assets/images/symbols-${winningColor}/void-${winningColor}.svg`;
      img5e.src = `./assets/images/symbols-${winningColor}/pentagram-${winningColor}.svg`;

      purpleStatusEl.classList.replace('purple-bg', `${winningColor}-100-bg`);
      purpleContainer.classList.replace('purple-border', `${winningColor}-100-border`);
      greenStatusEl.classList.replace('green-bg', `${winningColor}-300-bg`);
      greenContainer.classList.replace('green-border', `${winningColor}-300-border`);
      yellowStatusEl.classList.replace('yellow-bg', `${winningColor}-500-bg`);
      yellowContainer.classList.replace('yellow-border', `${winningColor}-500-border`);
      orangeStatusEl.classList.replace('orange-bg', `${winningColor}-700-bg`);
      orangeContainer.classList.replace('orange-border', `${winningColor}-700-border`);
      blueStatusEl.classList.replace('blue-bg', `${winningColor}-theme-accent-bg`);
      blueContainer.classList.replace('blue-border', `${winningColor}-theme-accent-bg-border`);

      gsap.set(purpleStatusEl, {
        scaleX: 1
      });

      gsap.to(greenStatusEl, {
        scaleX: 1
      });

      gsap.to(yellowStatusEl, {
        scaleX: 1
      });

      gsap.to(orangeStatusEl, {
        scaleX: 1
      });

      gsap.to(blueStatusEl, {
        scaleX: 1
      });

      resolve();
    }, 3000);
  });
};

gameBoardEl.addEventListener('click', applyTheme);
gameBoardEl.addEventListener('click', checkWinner);
