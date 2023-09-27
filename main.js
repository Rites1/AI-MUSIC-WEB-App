music_1 = "music.mp3";
music_2 = "music2.mp3";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;
score_left_wrist = 0;
song_1_status = "";
song_2_status = "";
score_right_wrist = 0;

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
    song_1_status = music_1.isPlaying();
    song_2_status = music_2.isPlaying();
    fill("red");
    stroke("red");
    if(score_left_wrist > 0.2){
        circle(left_wrist_x, left_wrist_y, 20);
        music_1.stop();
        if(song_2_status == false){
            music_2.play();
            document.getElementById("song").innerHTML = "playing - Peter Pan Song";
        }
        }
        if(score_right_wrist > 0.2){
            circle(right_wrist_x, right_wrist_y, 20);
            music_2.stop();
            if(song_1_status == false){
                music_1.play();
                document.getElementById("song").innerHTML = "playing - Harry Potter";
            }
        }
}

function modelloaded(){
    console.log("posenet is initilized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        score_left_wrist = results[0].pose.keypoints[9].score;
        score_right_wrist = results[0].pose.keypoints[10].score;
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("left wrist x = "+ left_wrist_x + " left wrist y = "+ left_wrist_y);
        console.log("right wrist x = "+ right_wrist_x + " right wrist y = "+ right_wrist_y);
    }
}