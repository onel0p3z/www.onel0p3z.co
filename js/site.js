'use strict';

const getRandomNumber = (min = 1, max = 5) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const setBackground = () => {
    const container = document.getElementById('background-container');
    const imgNum = getRandomNumber();
    const imgPath = `img/${imgNum}.jpg`;
    
    // Preload image
    const img = new Image();
    img.src = imgPath;
    
    img.onload = () => {
        container.style.backgroundImage = `url('${imgPath}')`;
        container.classList.add('loaded');
    };
};

document.addEventListener('DOMContentLoaded', () => {
    setBackground();
});
