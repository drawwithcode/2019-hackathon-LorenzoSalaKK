var mySong;
var myBG;
var myLogo;
var analyzer;
var volume = 0;
var resize;
var myElon;
var tgwid, tghei;

function preload() {
  mySong = loadSound("./assets/TG1_bumper.mp3");
  myBG = loadImage("./assets/mars.jpg");
  myLogo = loadImage("./assets/tgmars.png")
  myElon = loadImage("./assets/musk.png")
}

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  background('black')

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('black')
}

function draw() {
  background('black')
  var def = windowWidth * windowHeight / 1000
  var bgwid = def;
  var bghei = def / 1.5;
  tgwid = def / 2 * resize;
  tghei = def * 0.368 / 2 * resize;
  var elonwid = def * 0.514 /2;
  var elonhei = def /2;
  var poselon = windowHeight*2



  image(myBG, windowWidth / 2, windowHeight / 2, bgwid, bghei)
  if (mySong.isPlaying() == false) {
    poselon = windowHeight * 5 / 6
  } else if (mySong.isPlaying() == true) {
    image(myLogo, windowWidth / 2, windowHeight / 2, tgwid, tghei)
  }
  image(myElon, windowWidth / 2, poselon, elonwid , elonhei);
  console.log(poselon)
  volume = analyzer.getLevel();


  resize = map(volume, 0, 0.5, 1, 1.5)
}

function mouseClicked() {
  if (mySong.isPlaying() == false) { //returns the Boolean value (true or false)
    mySong.play();
  }

}
