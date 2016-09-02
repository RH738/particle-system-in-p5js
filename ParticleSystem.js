function ParticleSystem(amount) {
    this.particles = [];
    for (var i = 0; i < 100; i++) {
        this.particles[i] = new Particle();
    }

    this.show = function() {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
    this.update = function() {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].update(1);
        }
        // for (var j = 0; j < particles.length; j++) {
        //     if (i !== j) {
        //         //particles[i].attraction(particles[j], 10);
        //         // if (particles[i].checkCollision(particles[j])) {
        //         //   particles[i].handleCollision(particles[j]);
        //         // }
        //     }
        //}
    }
    this.addForce = function(vector) {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].force.add(vector);
        }
    }

    this.setForce = function(vector) {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].force = vector;
        }
    }

}
