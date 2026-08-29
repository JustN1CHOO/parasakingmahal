// Confetti effect
const confettiContainer = document.getElementById('confetti');
const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bcb', '#ff9f43'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = confetti.style.width;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.opacity = '0.8';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

// Add falling animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Generate confetti continuously
setInterval(createConfetti, 200);

// Reveal gift section on click
document.getElementById('openBtn').addEventListener('click', function() {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('giftSection').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});