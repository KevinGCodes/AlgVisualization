class Cell {
  x;
  y;
  visited = false;
  wall = false;
  canvas;
  previous = null;
  target = false;
  start = false;
  distance;
  weight = 1;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  makeWall() {
    this.wall = true;
    this.canvas.getContext('2d').clearRect(0, 0,this.canvas.width, this.canvas.height);
    this.canvas.classList.add('wall-animation');
    this.canvas.style.backgroundColor = "rgb(25, 16, 41)";
    
  }

  removeWall() {
    this.wall = false;
    this.canvas.style.backgroundColor = "rgb(255, 255, 255)";
    this.canvas.classList.remove('wall-animation');
  }

  makeTarget() {
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.target = true;
    let img = new Image();
    img.src = "/Users/kevin/OneDrive/Documents/visualizer/icons/flag-fill.svg";
    let ctx = this.canvas.getContext("2d");
    this.canvas.style.backgroundColor = "rgb(247, 47, 110)";
    img.onload = function () {
      ctx.drawImage(img, 10, 10, 220, 130);
    };
  }

  removeTarget() {
    this.target = false;
    this.canvas.style.backgroundColor = "white";
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  makeStart() {
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.start = true;
    let img = new Image();
    img.src = "/Users/kevin/OneDrive/Documents/visualizer/icons/flag.svg";
    img.style.backgroundColor = "rgb(255, 0, 0)";
    let ctx = this.canvas.getContext("2d");
    this.canvas.style.backgroundColor = "rgb(84, 227, 117)";
    img.onload = function () {
      ctx.drawImage(img, 10, 10, 220, 130);
    };
  }

  removeStart() {
    this.start = false;
    this.canvas.style.backgroundColor = "white";
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  makeWeight() {
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.weight = 5;
    let img = new Image();
    img.src = "/Users/kevin/OneDrive/Documents/visualizer/icons/stopwatch.svg";
    let ctx = this.canvas.getContext("2d");
    this.canvas.style.backgroundColor = "white";
    img.onload = function () {
      ctx.drawImage(img, 10, 10, 220, 130);
    };
  }

  removeWeight() {
    this.weight = 1;
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
