var ps;

function setup() {
    createCanvas(500, 500);
    ps = new ParticleSystem(100);
    ps.setForce(createVector(0, 1))
}

function mousePressed() {
    for (var i = 0; i < ps.particles.length; i++) {
        var dir = p5.Vector.sub(createVector(mouseX, mouseY), ps.particles[i].position);
        ps.particles[i].force = (p5.Vector.div(dir, (width * width + height * height)))
            .mult(1000);
    }
}

function mouseReleased() {
    for (var i = 0; i < ps.particles.length; i++) {
        ps.setForce(createVector(0, 1));
    }
}

function draw() {
    background(0);
    ps.update();
    ps.show();
}
