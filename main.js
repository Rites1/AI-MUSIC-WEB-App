music_1 = "music.mp3";
music_2 = "music2.mp3";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;
score_left_wrist = 0;
song_1_status = "";
song_2_status = "";

function preload(){
    music_1 = loadSound("music.mp3");
    music_2 = loadSound("music2.mp3");
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
    fill("red");
    stroke("red");
    if(left_wrist_x, left_wrist_y > 0.2){
        circle(left_wrist_x, left_wrist_y, 20);
        music_1.play();
        }
        if(right_wrist_x, right_wrist_y > 0.2){
            circle(right_wrist_x, right_wrist_y, 20);
            music_2.play();
        }
}

function pause() {
    music_1.pause();
}
function modelloaded(){
    console.log("posenet is initilized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        score_left_wrist = results[0].pose.keypoints[9].score;
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("left wrist x = "+ left_wrist_x + " left wrist y = "+ left_wrist_y);
        console.log("right wrist x = "+ right_wrist_x + " right wrist y = "+ right_wrist_y);
    }
}