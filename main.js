const canv = document.getElementById("mspaint");
const ctx = canv.getContext("2d");
let isDrawing = false;
let x = 0;
let y = 0;

canv.addEventListener('mousedown', (e) => isDrawing = true, x = e.offsetX, y = e.offsetY);
canv.addEventListener('mousemove', draw());
canv.addEventListener('mouseup', (e) => isDrawing = false);

function draw(e) {
    if(isDrawing) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
        x = e.offsetX;
        y = e.offsetY;
    }
}

function clear() {
    ctx.clearRect(0, 0, canv.width,canv.height);
}