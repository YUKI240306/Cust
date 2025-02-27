document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');

    // Клонування зображень для безшовного ефекту
    images.forEach(img => {
        const clone = img.cloneNode(true);
        slider.appendChild(clone);
    });
});