import React, { useEffect, useRef } from "react";
import { useP5 } from "react-p5";

const ParticlesP5 = () => {
  const canvasRef = useRef(null);
  const particlesCount = useParticlesCount();

  useEffect(() => {
    if (window.p5) {
      const canvas = canvasRef.current;
      const p5 = new window.p5(sketch, canvas);
      return () => {
        p5.remove();
      };
    } else {
      console.error("p5.js library not found.");
    }
  }, []);

  const sketch = (p5) => {
    let particles = [];

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.noStroke();
      p5.fill(77, 252, 254, 100);

      // Create particles and set their initial properties
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle(p5.random(p5.width), p5.random(p5.height)));
      }
    };

    p5.draw = () => {
      p5.clear();

      // Update and display particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].display();

        // Draw lines to connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const distance = p5.dist(
            particles[i].x,
            particles[i].y,
            particles[j].x,
            particles[j].y
          );

          if (distance < 200) {
            p5.stroke(77, 252, 254, 100);
            p5.line(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
          }
        }
      }
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
        this.radius = p5.random(5, 15);
        this.opacity = 255;
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x < 0 || this.x > p5.width) {
          this.velocity.x *= -1;
        }

        if (this.y < 0 || this.y > p5.height) {
          this.velocity.y *= -1;
        }
      }

      display() {
        p5.circle(this.x, this.y, this.radius);
      }
    }
  };

  return <div ref={canvasRef} />;
};

const useParticlesCount = () => {
  const getParticlesCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      return 30; // Decreased number of particles on small screens
    }
    return 100; // Default number of particles
  };

  const [particlesCount, setParticlesCount] = React.useState(
    getParticlesCount()
  );

  useEffect(() => {
    const handleResize = () => {
      setParticlesCount(getParticlesCount());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return particlesCount;
};

export default ParticlesP5;
