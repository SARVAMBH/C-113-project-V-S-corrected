function preload()
{

}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(650,243);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,50,50,500,400);
    circle(25,30,40).fill(255,0,0);
    rect(15,50,20,400).fill(0,255,0);
    circle(25,470,40).fill(255,0,0);
    rect(44,460,510,20).fill(0,255,0);
    circle(573.5,470,40).fill(255,0,0); 
    rect(564.01,50,20,400).fill(0,255,0);
    circle(573.5,30.5,40).fill(255,0,0); 
    rect(44,20,510,20).fill(0,255,0);
}

function take_snapshot()
{
    save('student_name.png');
}