import { GravitySystem, Renderer } from "./gravity.js";
var canvas = document.getElementById("canvas");
var paused = false;
var n_iter = 10;
var nx = 100;
var ny = 100;
var n_iter = 10;
var dt = 0.01;
var n_particle = 10000;
var gs = new GravitySystem(nx, ny, n_iter, dt, n_particle);
var renderer = new Renderer(gs, canvas);
for (let i = 0; i < n_particle; i++) {
    gs.particles_x[i] = Math.random();
    gs.particles_y[i] = Math.random();
}
function loop() {
    if (!paused) {
        // console.log(gs.particles_x);
        // console.log(gs.particles_y);
        // console.log(gs.particles_m);
        // gs.calcDensity();
        // console.log(gs.Density);
        gs.step();
        renderer.draw();
    }
    requestAnimationFrame(loop);
}
var button_ppause = document.getElementById("button_toggle_play");
button_ppause.onclick = () => {
    paused = !paused;
    button_ppause.innerHTML = paused ? "play" : "pause";
};
loop();
