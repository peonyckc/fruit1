const fruits = ['🍒', '🍓', '🍇', '🍎', '🍉', '🍑', '🍊', '🍋', '🍍', '🍌', '🥑', '🍈', '🍐', '🥝', '🥭', '🥥', '🫐'];

const gameBoard = document.getElementById('gameBoard');

function createFruit() {
    const fruit = document.createElement('div');
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    fruit.textContent = randomFruit;
    fruit.classList.add('fruit');
    fruit.style.left = ${Math.random() * 100}%;
    fruit.style.top = '0%';
    gameBoard.appendChild(fruit);

    const fallInterval = setInterval(() => {
        let currentTop = parseFloat(fruit.style.top || 0);
        if (currentTop < 100) {
            fruit.style.top = ${currentTop + 1}%;
        } else {
            fruit.remove();
        }
    }, 20);
}

setInterval(createFruit, 1000);

window.onload = function () {
    document.getElementById('backgroundMusic').play();
};
