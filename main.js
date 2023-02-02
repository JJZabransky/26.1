const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
let isDrawing = false;
let bezier = false;
let x = 0;
let y = 0;
let pointCount = 0;
let drawColor = "black";
let brushRange = "2";
let brushStyle = "round";
const clearButton = document.getElementById("reset");
const saveButton = document.getElementById("save");
const loadButton = document.getElementById("load");
const pointButton = document.getElementById("curve");

canv.addEventListener('mousedown', (e) =>{isDrawing = true; x = e.offsetX; y = e.offsetY; console.log(x+" "+y)});
canv.addEventListener('mousemove', draw);
canv.addEventListener('mouseup', () => isDrawing = false);
clearButton.addEventListener('click',clear);
saveButton.addEventListener('click',saveCanvas);
loadButton.addEventListener('click',loadCanvas);
pointButton.addEventListener('click', (e) =>{bezier = true;});
canv.addEventListener('mousedown', addCurvePoint);

function draw(e) {
    if(isDrawing) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.strokeStyle = drawColor;
        ctx.lineWidth = brushRange;
        ctx.lineCap = brushStyle;
        ctx.stroke();
        x = e.offsetX;
        y = e.offsetY;
    }
}

function clear() {
    ctx.clearRect(0,0,canv.width,canv.height);
    pointCount = 0;
}

function saveCanvas() {
    imageData = canv.toDataURL();
    localStorage.setItem('ImageData',imageData);
}

function loadCanvas() {
    clear();
    var img = new Image();
    img.src = localStorage.getItem('ImageData');
    ctx.drawImage(img,0,0);
}

function addCurvePoint() {
    if(bezier && pointCount < 4) {
        pointCount++;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 800, Math.random() * 800);
        ctx.bezierCurveTo(Math.random() * 800,Math.random() * 800,Math.random() * 800,Math.random() * 800,Math.random() * 800,Math.random() * 800);
        ctx.stroke();
    }
}