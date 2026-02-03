/* ============================================ */
/* LOVE TIMELINE - JAVASCRIPT */
/* ============================================ */

// ============================================
// 1. MUSIC TOGGLE
// ============================================

const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.classList.add('playing');
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    }
});

// ============================================
// 2. SMOOTH SCROLL TO TIMELINE
// ============================================

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () => {
    const timeline = document.getElementById('timeline');
    timeline.scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// 3. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in-scroll elements
document.querySelectorAll('.fade-in-scroll').forEach(el => {
    observer.observe(el);
});

// ============================================
// 4. SLIDESHOW FUNCTIONALITY
// ============================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[n].classList.add('active');
    indicators[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners for slideshow
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Indicator dots
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-advance slideshow every 5 seconds
setInterval(nextSlide, 5000);

// Initialize slideshow
showSlide(0);

// ============================================
// 5. SURPRISE SECTION - REVEAL & CONFETTI
// ============================================

const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');
const finalMessage = document.getElementById('finalMessage');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const confettiCanvas = document.getElementById('confettiCanvas');
const ctx = confettiCanvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Reveal the surprise message
surpriseBtn.addEventListener('click', () => {
    surpriseBtn.parentElement.style.display = 'none';
    surpriseMessage.classList.remove('hidden');
});

// YES Button - Confetti + Fireworks + Final Message
yesBtn.addEventListener('click', () => {
    surpriseMessage.classList.add('hidden');
    finalMessage.classList.remove('hidden');
    triggerConfetti();
    triggerHeartRain();
});

// NO Button - Playful runaway effect
noBtn.addEventListener('click', (e) => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
    
    // Add playful text after a few attempts
    if (!noBtn.dataset.attempts) {
        noBtn.dataset.attempts = 0;
    }
    noBtn.dataset.attempts++;
    
    if (noBtn.dataset.attempts > 5) {
        noBtn.textContent = 'Come on... 🥺';
    }
    if (noBtn.dataset.attempts > 10) {
        noBtn.textContent = 'You know you want to! 💕';
    }
});

// ============================================
// 6. CONFETTI EFFECT
// ============================================

class Confetti {
    constructor() {
        this.x = Math.random() * confettiCanvas.width;
        this.y = Math.random() * confettiCanvas.height - confettiCanvas.height;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = Math.random() * 5 + 3;
        this.size = Math.random() * 8 + 3;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 10;
        this.colors = ['#ff6b9d', '#c44569', '#ffeef8', '#ffe5f0'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.opacity = 1;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1; // gravity
        this.rotation += this.rotationSpeed;
        this.opacity -= 0.02;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

let confettiParticles = [];

function triggerConfetti() {
    // Create confetti particles
    for (let i = 0; i < 100; i++) {
        confettiParticles.push(new Confetti());
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    confettiParticles = confettiParticles.filter(p => p.opacity > 0);
    
    confettiParticles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
    });
    
    if (confettiParticles.length > 0) {
        requestAnimationFrame(animateConfetti);
    }
}

// ============================================
// 7. HEART RAIN EFFECT
// ============================================

class Heart {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = -50;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = Math.random() * 3 + 2;
        this.size = Math.random() * 20 + 10;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 8;
        this.emoji = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
        this.opacity = 1;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.opacity -= 0.01;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = this.size + 'px Arial';
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.emoji, 0, 0);
        ctx.restore();
    }
}

let heartParticles = [];

function triggerHeartRain() {
    // Create heart particles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            heartParticles.push(new Heart());
        }, i * 30);
    }
    animateHearts();
}

function animateHearts() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    heartParticles = heartParticles.filter(h => h.opacity > 0 && h.y < window.innerHeight);
    
    heartParticles.forEach(heart => {
        heart.update();
        heart.draw(ctx);
    });
    
    if (heartParticles.length > 0) {
        requestAnimationFrame(animateHearts);
    }
}

// ============================================
// 8. TIMELINE SCROLL ANIMATION
// ============================================

// Add fade-in-scroll class to timeline items for scroll animation
document.querySelectorAll('.timeline-item').forEach(item => {
    item.classList.add('fade-in-scroll');
});

document.querySelectorAll('.reason-card').forEach(card => {
    card.classList.add('fade-in-scroll');
});

// ============================================
// 9. PARALLAX EFFECT (OPTIONAL)
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// ============================================
// 10. SMOOTH SCROLL BEHAVIOR
// ============================================

// This is handled by CSS scroll-behavior, but here's a fallback for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// 11. KEYBOARD ACCESSIBILITY
// ============================================

// Allow Enter key to activate buttons
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});

// ============================================
// 12. INITIALIZATION
// ============================================

console.log('💕 Welcome to Our Love Timeline! 💕');
console.log('Made with love and vanilla JavaScript.');

// You can add more custom functionality here!
