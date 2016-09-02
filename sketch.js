var particles = [];

function setup() {
    createCanvas(500, 500);
    var counter;
    for (var i = 0; i < 1000; i++) {
        particles[i] = new Particle();
    }
    //particles[0] = new Particle(createVector(30, height / 2 + 3), createVector(1, 0));
    //particles[1] = new Particle(createVector(width - 30, height / 2), createVector(-1, 0));
    position = createVector(width / 2, height / 2);
    velocity = createVector(1, 1);
}

function mousePressed() {
    for (var i = 0; i < particles.length; i++) {
        var dir = p5.Vector.sub(createVector(mouseX, mouseY), particles[i].position);
        particles[i].force = p5.Vector.div(dir, (width * width + height * height))
                .mult(1000);
            }
    }

    function mouseReleased() {
        for (var i = 0; i < particles.length; i++) {
            particles[i].force = createVector(0, 0);
        }
    }

    function draw() {
        background(0);
        for (var i = 0; i < particles.length; i++) {
            particles[i].show();
            particles[i].update(1);
            // for (var j = 0; j < particles.length; j++) {
            //     if (i !== j) {
            //         //particles[i].attraction(particles[j], 10);
            //         // if (particles[i].checkCollision(particles[j])) {
            //         //   particles[i].handleCollision(particles[j]);
            //         // }
            //     }
            //}
        }
    }
