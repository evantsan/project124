function preload()
{

}
function setup()
{
    canvas = createCanvas(700,450);
    canvas.position(1000,200)
    video = createCapture(VIDEO)
    video.position(150,200);
    p = ml5.poseNet(video, modelLoaded);
    p.on('pose',gotPoses);
}
function draw()
{
    
}
function modelLoaded()
{
    console.log('model has been loaded successfully')
}
function gotPoses(results)
{
    
}