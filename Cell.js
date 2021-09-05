function Cell() {
    // generate position, diameter
    this.diam = random(50, 100);
    this.pos = createVector(random(this.diam * 0.6, width - this.diam * 0.6),
        random(this.diam * 0.6, height - this.diam * 0.6));

    // generate random color
    this.colour = [random(255), random(255), random(255), 125];

    this.count = 0;
    this.vel = p5.Vector();

    // choose random offsets for drawing the cell nucleus
    this.offsetX = 0; // random(-this.diam * 0.1, this.diam * 0.1);
    this.offsetY = 0; // random(-this.diam * 0.1, this.diam * 0.1);
    this.offsetR = random(0.2, 0.4);

    // traits
    this.speed = random(0.1, 0.3);
    this.growthMult = random(.9999, 1.001);

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
            this.vel = p5.Vector.mult(p5.Vector.random2D(), this.speed);
            // reset the timer
            this.count = floor(random(200, 500));
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

    this.grow = function () {
        this.diam *= this.growthMult;
        this.diam = constrain(this.diam, width / 100, width * .75);
    }

    this.mitosis = function () {
        
    }
}