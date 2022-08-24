x = 0;
y = 0;
circledrawn = "";
rectdrawn = "" ;

var SpeechRecognition = window.webkitSpeechRecognition;

recognition = new SpeechRecognition();

function setup() {
    canvas = createCanvas(900, 600);
}

function start() {
    recognition.start();
    document.getElementById("status").innerHTML = "System is listening. Please speak.";
}

recognition.onresult = function(event) {
    console.log(event);
    
    content = event.results[0][0].transcript;
    console.log(content);

    if(content == "circle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        circledrawn = "set";
        document.getElementById("status").innerHTML = "Started drawing circle";
    }
    if(content == "rectangle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        rectdrawn = "set";
        document.getElementById("status").innerHTML = "Started drawing rectangle";
    }
}

function draw() {
    if(circledrawn == "set") {
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        circledrawn = "";
    }
    if(rectdrawn == "set") {
        rect(x,y,60,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        rectdrawn = "";
    }
}