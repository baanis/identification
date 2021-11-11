img = "";
status = "";
function sofa() 
{
    window.location = "sofa.html";
}
function preload() {
    img = loadImage('sofa.jpg');
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
text("Sofa", 15, 75);
noFill();
stroke("#FF0000");
rect(10, 60, 620, 350);
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