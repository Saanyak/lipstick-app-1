function preload() {
}

function setup() {
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}


function draw() {
    image(video,0,0,400,300);
}