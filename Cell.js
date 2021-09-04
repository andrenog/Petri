function Cell() {
    // generate position, diameter
    this.diam = random(50, 100);
    this.pos = createVector(random(this.diam*0.6, width-this.diam*0.6), 
                            random(this.diam*0.6, height-this.diam*0.6));

    // generate random color
    this.colour = [random(255), random(255), random(255), 100];
    
    this.count = 0;
    this.vel = p5.Vector();

    // choose random offsets for drawing the cell nucleus
    this.offsetX = random(-this.diam * 0.1, this.diam * 0.1);
    this.offsetY = random(-this.diam * 0.1, this.diam * 0.1);
    this.offsetR = random(0.2, 0.4);

    this.show = function () {
        noStroke();
        fill(this.colour);
        ellipse(this.pos.x, this.pos.y, this.diam);
        fill(this.colour);
        ellipse(this.pos.x + this.offsetX, this.pos.y + this.offsetY, this.diam * this.offsetR);
    }

    this.move = function () {
        // change direction if the timer runs out
        if (this.count <= 0) {
            // pick a new random direction
            this.vel = p5.Vector.mult(p5.Vector.random2D(), 0.4);
            // reset the timer
            this.count = floor(random(100, 200));
        } else {
            this.count--;
        }
        // if the cell goes out of bounds, point it towards the centre of the canvas
        if (this.pos.x < this.diam / 2 || this.pos.x > width - this.diam / 2 ||
            this.pos.y < this.diam / 2 || this.pos.y > height - this.diam / 2) {
            // just turn it around
            this.vel.rotate(PI);
        }
        this.pos.add(this.vel);

    }
}