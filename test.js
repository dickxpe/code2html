let xPositions = [];
let yPositions = [];
let colors = [];

function setup() {
    colorMode(HSB);
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 1000; i++) {
        xPositions[i] = random(0, width);
        yPositions[i] = random(0, height);
        colors[i] = random(0, 360);
    }
    drawGhost(width / 2, height / 2, 0);
}

function draw() {
    background("black");
    for (let i = 0; i < xPositions.length; i++) {
        drawGhost(xPositions[i], yPositions[i], colors[i]);
        xPositions[i] += random(-2, 2);
        yPositions[i] += random(-2, 2);
    }
}

function draw2() {
    background("black");
    for (let i = 0; i < xPositions.length; i++) {
        drawGhost(xPositions[i], yPositions[i], colors[i]);
        xPositions[i] += random(-2, 2);
        yPositions[i] += random(-2, 2);
    }
}

