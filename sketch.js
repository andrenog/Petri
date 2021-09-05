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
  for (let i = cells.length-1; i >= 0; i--){
    cells[i].show();
    cells[i].move();
    cells[i].grow();
  }
}

