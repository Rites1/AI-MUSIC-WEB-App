music_1 = "";
music_2 = "";

function preload(){
    music_1 = loadSound("music_1");
    music_2 = loadSound("music_2");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw(){
    image(webcam, 0, 0, 600, 500);
}