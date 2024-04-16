
// board
let board;
let boardHeight = 480;
let boardWidth = 640;
let context;

// Character
let charHeight = 32;
let charWidth = 32;
let charX = boardWidth / 2 - charWidth / 2;
let charY = boardHeight / 2 - charHeight / 2;
let charColor = 'black'
let charDefault = 'black'


window.onload = function() {
    board = document.getElementById('board');
    context = board.getContext('2d');
    board.width = boardWidth;
    board.height = boardHeight;
    
    requestAnimationFrame(gameLoop);
    document.addEventListener('keydown', moveCharacter);
    document.addEventListener('keyup', function() {
        charColor = charDefault;
    });
};


function gameLoop() {
    context.clearRect(0, 0, boardWidth, boardHeight)
    requestAnimationFrame(gameLoop);
    
    context.fillStyle = charColor;
    context.fillRect(charX, charY, charWidth, charHeight);

};

function moveCharacter(e) {
    switch (e.key) {
        case 'ArrowUp':
            charY -= 5;
        break;
        case 'ArrowDown':
            charY += 5;
        break;
        case 'ArrowLeft':
            charX -= 5;
        break;
        case 'ArrowRight':
            charX += 5;
        break;
    };
};


function renderTail(tail) {
    for (let i = 0; i < tailLength; i++) {
        let segment = new Segment(charX - (i * 10), charY - (i * 10));
        tail.push(segment);
    }
    return tail
}

