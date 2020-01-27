var particleNumber = 2000;
// number of particles (change it!)

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 20);
  };
})();
// window.requestAnimFrame = (function() {
//   return (
//     window.requestAnimationFrame ||
//     function(callback) {
//       window.setTimeout(callback, 1000 / 20);
//     }
//   );
// })();

// requesting the keyframes

var c = document.getElementById("c");
var ctx = c.getContext("2d");
//context and id of canvas

var w = window.innerWidth;
var h = window.innerHeight;
//width and height of canvas
// ctx.fillStyle = "black";
// ctx.fillRect(0, 0, w, h);

c.width = w;
c.height = h;
//setting the width and height for canvas

function between(min, max) {
  return Math.random() * (max - min) + min;
}

var particles = [];
// the particles storage

for (i = 0; i < particleNumber; i++) {
  setTimeout(function() {
    particles.push(new createParticle());
  }, i * 4.3);

  // add a particle (not all at once - setTimeout(); )
}

// for (i = 0; i < particleNumber; i++) {
//   particles.push(new createParticle());
// }
// adding 55 particles

function createParticle() {
  this.x = c.width / 2;
  this.y = c.height / 2;

  this.angle = between(3, 10);
  this.speed = c.width / 500;

  this.size = 5;

  var r = "#8BC9D8";
  var o = "#A5E553";
  var y = "#fff";
  var co = "#F83F2D";
  var c1 = "#f8e02d";
  var c2 = "#3bf82d";
  var c3 = "#f82d6a";
  var c4 = "#2df8e7";
  var c5 = "#2d56f8";
  var array = [r, o, y, co, c1, c2, c3, c4, c5];
  this.color = array[Math.floor(Math.random() * 9)];
}

function draw() {
  requestAnimFrame(draw);

  ctx.fillStyle = "rgba(0, 0, 0, 0.075)";
  // ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);

  for (t = 0; t < particles.length; t++) {
    var p = particles[t];

    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.size, Math.PI * 2, false);
    ctx.fill();

    p.x += Math.sin(Math.PI * 1 + p.angle) * p.speed;
    p.y += Math.cos(Math.PI * 1 + p.angle) * p.speed;

    p.angle += 0.02;
  }
}

draw();
