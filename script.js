// ==============================
// CLICK SOUND
// ==============================
const clickSound = new Audio('assets/sounds/click.mp3');

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

// ==============================
// GAME SEARCH FILTER
// ==============================
function filterGames() {
    const input = document.getElementById('gameSearch').value.toUpperCase();
    const games = document.getElementById('gamesList').getElementsByClassName('game-card');
    for (let i = 0; i < games.length; i++) {
        const txtValue = games[i].textContent || games[i].innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            games[i].style.display = "";
        } else {
            games[i].style.display = "none";
        }
    }
}

// ==============================
// SMOOTH SCROLL NAV LINKS
// ==============================
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        playClickSound();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// ==============================
// LOGIN MODAL
// ==============================
const loginModal = document.getElementById('loginModal');
const openLoginBtn = document.getElementById('openLogin');
const closeLoginBtn = document.getElementById('closeLogin');

if (openLoginBtn && closeLoginBtn && loginModal) {
    openLoginBtn.addEventListener('click', () => {
        playClickSound();
        loginModal.style.display = 'flex';
    });

    closeLoginBtn.addEventListener('click', () => {
        playClickSound();
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });
}

// ==============================
// REGISTER FORM SUBMIT
// ==============================
const registerForm = document.querySelector('.register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playClickSound();
        alert('Registration Successful! Welcome to GBG PlayZone 🎮');
        registerForm.reset();
    });
}

// ==============================
// CONTACT FORM SUBMIT
// ==============================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playClickSound();
        alert('Thank you for contacting GBG PlayZone! We will reach you soon.');
        contactForm.reset();
    });
}

// ==============================
// SCROLL ANIMATION FOR SECTIONS
// ==============================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==============================
// GAME CARD CLICK EVENT
// ==============================
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        playClickSound();
        alert('You clicked on: ' + card.textContent);
    });
});

// ==============================
// MOBILE MENU TOGGLE (OPTIONAL)
// ==============================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navList = document.querySelector('.nav-links');

if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('open');
        playClickSound();
    });
}

// ==============================
// OPTIONAL: BACK TO TOP BUTTON
// ==============================
const backTopBtn = document.createElement('button');
backTopBtn.textContent = '↑ Top';
backTopBtn.id = 'backTopBtn';
backTopBtn.style.position = 'fixed';
backTopBtn.style.bottom = '40px';
backTopBtn.style.right = '40px';
backTopBtn.style.padding = '12px 18px';
backTopBtn.style.border = 'none';
backTopBtn.style.borderRadius = '8px';
backTopBtn.style.background = '#ffcc00';
backTopBtn.style.color = 'black';
backTopBtn.style.fontWeight = 'bold';
backTopBtn.style.cursor = 'pointer';
backTopBtn.style.display = 'none';
backTopBtn.style.zIndex = '100';
document.body.appendChild(backTopBtn);

backTopBtn.addEventListener('click', () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backTopBtn.style.display = 'block';
    } else {
        backTopBtn.style.display = 'none';
    }
});

// ==============================
// OPTIONAL: THEME SWITCH (LIGHT/DARK)
// ==============================
const themeBtn = document.createElement('button');
themeBtn.textContent = '🌙';
themeBtn.id = 'themeBtn';
themeBtn.style.position = 'fixed';
themeBtn.style.bottom = '40px';
themeBtn.style.left = '40px';
themeBtn.style.padding = '12px 18px';
themeBtn.style.border = 'none';
themeBtn.style.borderRadius = '8px';
themeBtn.style.background = '#ffcc00';
themeBtn.style.color = 'black';
themeBtn.style.fontWeight = 'bold';
themeBtn.style.cursor = 'pointer';
themeBtn.style.zIndex = '100';
document.body.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
    playClickSound();
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = '☀️';
    } else {
        themeBtn.textContent = '🌙';
    }
});

// ==============================
// INIT: ADD EXTRA GAME CARDS DYNAMICALLY
// ==============================
const extraGames = ['League of Legends', 'Dota 2', 'Overwatch', 'Rainbow Six Siege', 'CS:GO', 'PUBG Mobile', 'Genshin Impact', 'Among Us', 'Rocket League', 'Hearthstone', 'World of Warcraft', 'Destiny 2'];
const gamesListContainer = document.getElementById('gamesList');

if (gamesListContainer) {
    extraGames.forEach(game => {
        const div = document.createElement('div');
        div.className = 'game-card';
        div.textContent = game;
        div.onclick = playClickSound;
        gamesListContainer.appendChild(div);
    });
}

// ==============================
// FINAL LOG
console.log('GBG PlayZone JS Loaded - All features ready!');