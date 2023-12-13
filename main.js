video = "";

function preload()
{
    video = createVideo(VIDEO);
    video.hide();
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : ";
}

function draw()
{
    image(VIDEO , 0, 0, 480, 380);
}