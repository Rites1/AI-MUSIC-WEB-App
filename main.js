music_1 = "";
music_2 = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;

function preload(){
    music_1 = loadSound("music_1");
    music_2 = loadSound("music_2");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    poseNet = ml5.poseNet(webcam, modelloaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    image(webcam, 0, 0, 600, 500);
}

function modelloaded(){
    console.log("posenet is initilized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
    }
}