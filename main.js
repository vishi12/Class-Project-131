function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 45, 75);
    text("Cat", 280, 115);
    text("Bowl", 280, 325);
    noFill();
    stroke("red");
    rect(40, 60, 450, 350);
    rect(275, 100, 285, 300);
    rect(275, 310, 120, 100);
}