document.addEventListener('DOMContentLoaded', function () {

    //Hover card GSAP
    const cards = document.querySelectorAll('.card-cover');
    const linkImage = 'http://localhost:5500/images/cover-hd/'

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.inOut'
            });
        });
    });










    // GSAP Modal
    const panel = document.getElementById('sidePanel');
    const closeBtn = document.getElementById('closeBtn');

    cards.forEach(card => {
        card.addEventListener('click', async () => {
            const name = card.getAttribute('name');
            const imageUrl = `${linkImage}${name}_hd.jpg`;
            const backgroundImage = `url("${imageUrl}")`;

            try {
                // Wait until the image is fully loaded
                await loadImage(imageUrl);

                // Set background image after it's loaded
                panel.style.backgroundImage = backgroundImage;
                panel.style.backgroundSize = 'cover';
                panel.style.backgroundPosition = 'center';

                // Now show the panel
                gsap.to(panel, { x: '0%', duration: 0.6, ease: 'power2.out' });

            } catch (error) {
                console.error('Image failed to load:', error);
            }
        });
    });


    closeBtn.addEventListener('click', () => {
        gsap.to(panel, { x: '-100%', duration: 0.6, ease: 'power2.in' });
    });











    //Dark and Light mode
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const icon = themeToggleBtn.querySelector('i');

    const themes = ['light', 'dark', 'auto'];
    let currentThemeIndex = 2; // Default: auto

    function updateTheme() {
        const theme = themes[currentThemeIndex];
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);

        // Update icon
        icon.className = 'bi fs-5';
        if (theme === 'light') icon.classList.add('bi-sun-fill');
        else if (theme === 'dark') icon.classList.add('bi-moon-fill');
        else icon.classList.add('bi-circle-half');
    }

    // On load: apply saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes.includes(savedTheme)) {
        currentThemeIndex = themes.indexOf(savedTheme);
        updateTheme();
    }

    themeToggleBtn.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        updateTheme();
    });

})









//Helpers
// Helper function to preload image
//Prevents flicker
function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }
