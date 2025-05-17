// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let positions = []; // Array to store previous positions

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Store the current position
    positions.push({ x: e.clientX, y: e.clientY });

    // Limit the number of stored positions to create a tail effect
    if (positions.length > 10) {
        positions.shift(); // Remove the oldest position
    }

    // Move the follower to the last position in the array
    const lastPosition = positions[positions.length - 1];
    cursorFollower.style.left = lastPosition.x + 'px';
    cursorFollower.style.top = lastPosition.y + 'px';
});

// Cursor effects on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card, .form-control, .submit-btn, .hamburger');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-active');
        cursorFollower.classList.add('cursor-follower-active');
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
        cursorFollower.classList.remove('cursor-follower-active');
    });
});
