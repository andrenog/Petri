var cells = [];

function setup() {
    createCanvas(600, 600);
    background(51);

    for (let i = 0; i < 6; i++) {
        x = random(width);
        y = random(height);
        cell = new Cell();
        cells.push(cell);
    }
}

function draw() {
    background(51);
    for (let i = cells.length - 1; i >= 0; i--) {
        cells[i].show();
        cells[i].move();
        cells[i].grow();
    }
}

function mousePressed() {
    for (let i = cells.length - 1; i >= 0; i--) {
        if (dist(mouseX,mouseY,cells[i].pos.x,cells[i].pos.y)<= cells[i].diam/2) {
            console.log('Cell',i,'detected!!');
            console.log(cells[i]);
        }
    }
}