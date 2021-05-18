song="";
joke="";
leftWrist=0;
leftwristX=0;
leftwristY=0;
RightwristX=0;
RightwristY=0;
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log(leftwristX,leftwristY);
        RightwristX=results[0].pose.rightWrist.x;
        RightwristY=results[0].pose.rightWrist.y;
        console.log(RightwristX,RightwristY);
    }
}
function draw(){
image(video,0,0,600,500);
}
function preload(){
song=loadSound("music.mp3");
joke=loadSound("joker BGM.mp3")
}
function play(){
song.play();
}
function joke(){
    joke.play()
}
function stop(){
    song.stop();
    joke.stop()
}
