let canvas = document.getElementById("board");
let context = canvas.getContext("2d"); // to draw on canvas

// dimensions acc to background image
canvas.height = 640;
canvas.width = 360;

// bird
let bird = {
    x: canvas.width / 8,
    y: canvas.height / 2,
    width: 34,
    height: 24,
    // og image w/h ratio is 408/228 = 17/12 so taking 34/24 as its also in same ratio
};
birdImg = new Image();
birdImg.src = "./assets/flappybird.png";
birdImg.onload = function () {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    //similar to context.fillRect()
};

requestAnimationFrame(update);

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
}
