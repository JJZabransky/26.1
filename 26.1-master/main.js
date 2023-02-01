const canv = document.getElementById("mspaint");
const ctx = canv.getContext("2d");
let isDrawing = false;
let x = 0;
let y = 0;
let drawColor = "black";
let brushRange = "2";

canv.addEventListener('mousedown', (e) =>{isDrawing = true; x = e.offsetX; y = e.offsetY; console.log(x+" "+y)});
canv.addEventListener('mousemove', draw);
canv.addEventListener('mouseup', () => isDrawing = false);

function draw(e) {
    if(isDrawing) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.strokeStyle = drawColor;
        ctx.lineWidth = brushRange;
        ctx.stroke();
        x = e.offsetX;
        y = e.offsetY;
    }
}

function clear() {
    ctx.fillStyle = "white";
    ctx.clearRect(0,0,canv.width,canv.height);
    ctx.fillRect(0,0,canv.width,canv.height);
}

function saveCanvas() {
    
}

function loadCanvas() {

}