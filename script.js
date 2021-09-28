const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let points = [];

// выбор толщины
let thickness
document.getElementById('thickness').addEventListener('change', e => {
    thickness = e.target.value
})


// выбор цвета
let color
document.getElementById('color').addEventListener('change', e => {
    color = e.target.value
})

// выбор backgrcolor
let backgrcolor
document.getElementById('backgrcolor').addEventListener('change', e => {
    backgrcolor = e.target.value
    ctx.fillStyle = backgrcolor
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})

const drawingFn = function(moveEvent) {
    ctx.lineTo(moveEvent.offsetX, moveEvent.offsetY)
    ctx.lineWidth = thickness * 0.5
    ctx.strokeStyle = color
    ctx.lineJoin = 'round'
    ctx.stroke()
        // requestAnimationFrame(drawingFn);


}
canvas.addEventListener('mousedown', e => {
    ctx.beginPath()
    let x = e.offsetX
    let y = e.offsetY
    ctx.moveTo(x, y)
    ctx.stroke()
    canvas.addEventListener('mousemove', drawingFn)

})

canvas.addEventListener('mouseup', e => {
    canvas.removeEventListener('mousemove', drawingFn)

})

//собираем в массив
let drawingArr = points.push(ctx.lineWidth, ctx.strokeStyle, ctx.fillStyle);

// для сохранения
function saveDrawing() {
    const imageCopy = document.getElementById("saveDrawingImg");
    imageCopy.src = canvas.toDataURL();
    var imageContainer = document.getElementById("saveDrawingInfo");
    imageContainer.style.display = "block";
}

// для очистки
function clearDrawing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//удаляем последнее действие с массива
//запуталась окончательно
function undoLast() {
    points.pop();
    console.log(points)
    new Array(drawingArr)
    console.log(points)

}
console.log(points)