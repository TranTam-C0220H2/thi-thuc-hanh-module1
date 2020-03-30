function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.renderCircleInCanvas = function () {
        let isCanvas = document.getElementById('myCanvas');
        let canvasContext = isCanvas.getContext('2d');
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
        canvasContext.closePath();
    }
}

let circle = new Circle(10, 10, 100, '#000000');

