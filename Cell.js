function Cell() {
    // Generate position and radius
    this.pos = createVector(random(width), random(height));
    this.r = random(20, 100);
    this.count = 0;
    this.vel = p5.Vector();
    offsetX = random(-this.r * 0.1, this.r * 0.1);
    offsetY = random(-this.r * 0.1, this.r * 0.1);
    offsetR = random(0.2, 0.4);

    this.show = function () {
        noStroke();
        fill(255, 0, 255, 100);
        ellipse(this.pos.x, this.pos.y, this.r);
        fill(255, 0, 255, 100);
        ellipse(this.pos.x + offsetX, this.pos.y + offsetY, this.r * offsetR);
    }

    this.move = function () {
        if (this.count <= 0) {
            this.vel = p5.Vector.mult(p5.Vector.random2D(), 0.6);
            this.count = floor(random(100,200));
            console.log("E virou!");
        }
        else {
            this.count--;
        }
        this.pos.add(this.vel);
        
    }
}