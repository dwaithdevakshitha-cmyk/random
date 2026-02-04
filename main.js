const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const reminder = document.getElementById('reminder');
const card = document.getElementById('card');
const successContent = document.getElementById('successContent');

let noClickCount = 0;

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Show the reminder
    reminder.classList.remove('hidden');
    
    // Aesthetic update: Make the YES button bigger each time they say NO
    const currentScale = 1 + (noClickCount * 0.15);
    yesBtn.style.transform = `scale(${currentScale})`;
    
    // Optionally move the NO button to make it "playful"
    if (noClickCount > 2) {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Shake the card for emphasis
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
});

yesBtn.addEventListener('click', () => {
    card.classList.add('hidden');
    successContent.classList.remove('hidden');
    
    // Create confetti effect
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff'][Math.floor(Math.random() * 4)];
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Add dynamic CSS for confetti and shake
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        top: -10px;
        z-index: 1000;
        animation: fall linear forwards;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);
