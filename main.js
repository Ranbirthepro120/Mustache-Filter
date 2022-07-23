mustacheX = 0;
mustacheY = 0;
function preload()
{
    clown_nose = loadImage('Mustache.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Pose Net is initialized");
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(video, 0, 0, 300, 300);
}
function take_snapshot()
{
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.mustache.x;
        mustacheY = results[0].pose.mustache.y;
        console.log("mustache = " + results[0].pose.mustache.x);
        console.log("mustache y = " + results[0].pose.mustache.y);
    }
}