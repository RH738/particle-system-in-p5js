function Particle(position, velocity, force, dampening, radius) {
    this.radius = radius || random(2, 2);
    this.position = position || createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius));
    this.velocity = velocity || createVector(random(-1, 1), random(-1, 1));
    this.velocity.mult(0);
    this.force = force || createVector(0, 0);
    this.dampening = dampening || 0.99;
    this.color = color(222, 145, 55);

    this.update = function(timestep) {
        this.velocity.add(this.force);
        this.velocity.mult(this.dampening);
        var nextStep = this.velocity;
        nextStep.mult(timestep);
        var nextPosition = p5.Vector.add(this.position, nextStep);
        if (nextPosition.x < this.radius) {
            this.velocity.x *= -1;
        } else if (nextPosition.x > width - this.radius) {
            this.velocity.x *= -1;
        } else if (nextPosition.y < this.radius) {
            this.velocity.y *= -1;
        } else if (nextPosition.y > height - this.radius) {
            this.velocity.y *= -1;
        } else {
            this.position.add(nextStep);
        }
    }

    this.checkCollision = function(partner) {
        if (p5.Vector.dist(this.position, partner.position) < partner.radius + this.radius) {
            return true;
        }
    }

    this.handleCollision = function(partner) {
        var subVector = p5.Vector.sub(this.position, partner.position);
        var angle = subVector.heading();
        this.velocity.rotate(angle);
        this.velocity.x *= -1;
        this.velocity.rotate(-angle);

        partner.velocity.rotate(angle);
        partner.velocity.x *= -1;
        partner.velocity.rotate(-angle);
    }


    this.attraction = function(partner, strength) {
        var subVector = p5.Vector.sub(this.position, partner.position);
        var dist = subVector.mag();
        this.force.add(createVector(0,1));
        partner.force.add(createVector(0,1));
    }

    this.show = function() {
        colorMode(HSB);
        fill(map(this.velocity.mag(), 0, 10, 180, 0), 100, 100);
        ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    }
}
