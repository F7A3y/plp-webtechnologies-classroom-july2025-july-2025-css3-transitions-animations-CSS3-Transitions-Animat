// Global variable to track animation state
let animationRunning = false;

/**
 * Toggles the bounce animation of the box.
 * @param {string} elementId - The id of the element to animate
 * @returns {boolean} - Returns the current animation state (true = running)
 */
function toggleAnimation(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return false;

  if (animationRunning) {
    el.style.animationPlayState = 'paused';
    animationRunning = false;
  } else {
    el.style.animationPlayState = 'running';
    animationRunning = true;
  }

  return animationRunning;
}

/**
 * Calculates animation duration based on a speed factor.
 * @param {number} speedFactor - Speed multiplier (>0)
 * @returns {number} - Duration in seconds
 */
function calculateDuration(speedFactor) {
  const baseDuration = 2; // seconds
  return baseDuration / speedFactor;
}

// Setup event listener on button to toggle animation
document.getElementById('toggleBtn').addEventListener('click', function () {
  const running = toggleAnimation('animatedBox');
  this.textContent = running ? 'Pause Animation' : 'Start Animation';
});
