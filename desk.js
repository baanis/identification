img = "";
status = "";
function desk() 
{
    window.location = "desk.html";
}
function preload() {
    img = loadImage('desk.jpg');
}
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Desk", 55, 75);
noFill();
stroke("#FF0000");
rect(50, 60, 535, 350);
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
    }
    function gotResult(error, results){
        if(error){
            console.log(error);
        }
        console.log(results);
    }