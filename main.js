function preload(){
    img=loadImage("frame.jpg")
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
  image(img,0,0,500,500);
  image(video,80,90,350,350)
}