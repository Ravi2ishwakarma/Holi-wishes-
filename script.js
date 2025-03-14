const button = document.getElementById('triggerAnimation');
const balloonContainer = document.getElementById('balloonContainer');
const rectangles = document.querySelectorAll('.rectangle');

button.addEventListener('click', () => {
  // Create initial balloons on button click
  rectangles.forEach(rectangle => {
    createBalloons(5, rectangle);
  });
  
  // Keep generating balloons continuously every 3 seconds
  setInterval(() => {
    rectangles.forEach(rectangle => createBalloons(3, rectangle));
  }, 3000);
});

function createBalloons(count, rectangle) {
  for (let i = 0; i < count; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Set random starting position near rectangle
    balloon.style.left = `${rectangle.offsetLeft + Math.random() * 50 - 25}px`;
    balloon.style.top = `${rectangle.offsetTop + Math.random() * 50 - 25}px`;

    // Set random color
    balloon.style.backgroundColor = getRandomColor();

    // Add to container
    balloonContainer.appendChild(balloon);

    // Remove balloon after animation ends
    balloon.addEventListener('animationend', () => balloon.remove());
  }
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 70%)`;
}