// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Simple fade-in animation for main content
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;

    // Fade-in effect
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        } else {
            opacity += 0.02;
            mainContent.style.opacity = opacity;
        }
    }, 30); // Adjust this value for faster/slower fade-in

    // Input field placeholder animation
    const input = document.querySelector('main input');
    const placeholder = input.getAttribute('placeholder');
    let placeholderIndex = 0;

    function typePlaceholder() {
        if (placeholderIndex < placeholder.length) {
            input.setAttribute('placeholder', placeholder.substring(0, placeholderIndex + 1));
            placeholderIndex++;
            setTimeout(typePlaceholder, 100); // Speed of typing
        } else {
            setTimeout(erasePlaceholder, 2000); // Pause before erasing
        }
    }

    function erasePlaceholder() {
        if (placeholderIndex > 0) {
            input.setAttribute('placeholder', placeholder.substring(0, placeholderIndex - 1));
            placeholderIndex--;
            setTimeout(erasePlaceholder, 100);
        } else {
            setTimeout(typePlaceholder, 500); // Pause before typing again
        }
    }

    // Initiate the placeholder typing effect
    typePlaceholder();

    // Menu items hover effect (optional)
    const menuItems = document.querySelectorAll('header ul li a');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});

