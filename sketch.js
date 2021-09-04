var cells = [];

function setup() {
  createCanvas(600, 400);
  background(51);

  for (let i = 0; i < 1; i++) {
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
  }

  //console.log(cells[0].vel)
}

