function Cell() {
    // Generate position and diameter
    this.diam = random(20, 100);
    this.pos = createVector(random(this.diam*0.6, width-this.diam*0.6), 
                            random(this.diam*0.6, height-this.diam*0.6));
    this.count = 0;
    this.vel = p5.Vector();
    offsetX = random(-this.diam * 0.1, this.diam * 0.1);
    offsetY = random(-this.diam * 0.1, this.diam * 0.1);
    offsetR = random(0.2, 0.4);

    this.show = function () {
        noStroke();
        fill(255, 0, 255, 100);
        ellipse(this.pos.x, this.pos.y, this.diam);
        fill(255, 0, 255, 100);
        ellipse(this.pos.x + offsetX, this.pos.y + offsetY, this.diam * offsetR);
    }

    this.move = function () {
        // change direction if the timer runs out
        if (this.count <= 0) {
            // pick a new random direction
            this.vel = p5.Vector.mult(p5.Vector.random2D(), 0.6);
            // reset the timer
            this.count = floor(random(100, 200));
            // console.log("E virou!");
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