const hero = document.getElementById('hero-desktop');
const leftIcon = document.getElementById('left-icon');
const rightIcon = document.getElementById('right-icon');

// 🖼️ Array of banner images
const images = [
    "Assets/hero_images/hero_image1.jpg",
    "Assets/hero_images/hero_image2.jpg",
    "Assets/hero_images/hero_image3.jpg",
    "Assets/hero_images/hero_image4.jpg",
    "Assets/hero_images/hero_image5.jpg"
];

let currentIndex = 0;

//  Function to update hero background
function updateHeroBackground() {
    // Fade out first
    hero.style.opacity = 0;

    setTimeout(() => {
        // Update the background with gradient + image
        hero.style.background = `
      linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1)),
      url('${images[currentIndex]}')
    `;
        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center top";
        hero.style.backgroundRepeat = "no-repeat";

        // Fade back in smoothly
        hero.style.opacity = 1;
    }, 100);
}

// Next Image
rightIcon.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateHeroBackground();
});

// Previous Image
leftIcon.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateHeroBackground();
});

//calling function
updateHeroBackground();
