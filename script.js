// === MUSIC SETTINGS ===
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
let isPlaying = false;

// Set volume to gentle 30% so it doesn't overpower
bgMusic.volume = 0.3;

// Smooth fade-in effect
function fadeInAudio() {
    bgMusic.play();
    let vol = 0;
    const fadeInterval = setInterval(() => {
        if (vol < 0.3) {
            vol += 0.02;
            bgMusic.volume = vol;
        } else {
            clearInterval(fadeInterval);
        }
    }, 100);
}

// Toggle Play / Pause
musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🔇';
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play();
        musicIcon.textContent = '🎵';
        musicToggle.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// Auto-play music when she opens her gift 🎁
document.getElementById('revealBtn').addEventListener('click', () => {
    if (!isPlaying) {
        fadeInAudio();
        musicIcon.textContent = '🎵';
        musicToggle.classList.add('playing');
        isPlaying = true;
    }

    // Original reveal animation
    document.querySelector('.hero').style.opacity = '0';
    document.querySelector('.hero').style.transform = 'translateY(-20px)';
    setTimeout(() => {
        document.querySelector('.hero').style.display = 'none';
        document.getElementById('mainContent').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
});

// === CONFETTI (keep original code) ===
const confettiContainer = document.getElementById('confetti');
const colors = ['#c24e7c', '#ffd449', '#ff7a7a', '#6ed4d4', '#9d8df1', '#ffb347'];

function createConfetti() {
    const el = document.createElement('div');
    const size = Math.random() * 8 + 6;
    el.style.cssText = `
        position:absolute;
        width:${size}px;
        height:${size}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        left:${Math.random() * 100}vw;
        top:-15px;
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        opacity:0.85;
        transform:rotate(${Math.random() * 360}deg);
        animation:fall ${Math.random() * 3 + 2.5}s linear forwards;
    `;
    confettiContainer.appendChild(el);
    setTimeout(() => el.remove(), 5500);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to { transform: translateY(105vh) rotate(720deg); opacity:0; }
    }
`;
document.head.appendChild(style);

setInterval(createConfetti, 180);