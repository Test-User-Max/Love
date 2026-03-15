// --- 1. Background Floating Hearts ---
function createBgHearts() {
    const container = document.getElementById('bg-hearts');
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('floating-heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        container.appendChild(heart);
    }
}
createBgHearts();

// --- 2. Typing Animation ---
const textToType = "From sharing notes in Class 7 to sharing our lives together... 9 beautiful years and counting.";
let i = 0;
const speed = 50; 

function typeWriter() {
    if (i < textToType.length) {
        document.getElementById("typing-text").innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Show the continue button smoothly after typing finishes
        const btn = document.getElementById("btn-intro");
        btn.classList.remove("hidden");
        btn.style.display = "inline-block";
        btn.style.animation = "fadeIn 1s ease-in-out";
    }
}

// Start typing when page loads
window.onload = () => {
    setTimeout(typeWriter, 1000); // 1 second pause before typing starts
};

// --- 3. Screen Transitions ---
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });

    // Show target screen
    const target = document.getElementById(screenId);
    target.classList.remove('hidden');
    target.classList.add('active');
}

// --- 4. The Escaping "NO" Button ---
const noBtn = document.getElementById('btn-no');

function moveButton() {
    // Calculate safe bounds so the button doesn't go off-screen
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed'; // fixed allows it to break out of the flex container
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Support both mouse hover and mobile tap
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the click from registering before it moves
    moveButton();
});

// --- 5. Celebration Scene ---
function triggerYes() {
    showScreen('celebration');
    createConfetti();
}

function createConfetti() {
    const emojis = ['❤️', '💖', '💕', '✨', '🎈'];
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.classList.add('confetti');
        
        // Randomize starting position, falling speed, and direction
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10vh';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);

        // Clean up DOM after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}