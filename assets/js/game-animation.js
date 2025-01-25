const gameBoardEl = document.querySelector('.game-board');
const gameIconsEl = document.querySelectorAll('.game-icon-init');

document.addEventListener('DOMContentLoaded', () => {
  gsap.to(gameIconsEl, {
    opacity: 1,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    stagger: 0.05,
    ease: 'easeInOut'
  });
});
