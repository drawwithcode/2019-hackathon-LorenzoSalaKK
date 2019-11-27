var mySong;
var myBG;
var myLogo;
var analyzer;
var volume = 0;
var resize;
var myElon;

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
  var bgwid = windowWidth
  var bghei = windowWidth / 1.5
  var tgwid = windowWidth / 2 * resize
  var tghei = windowWidth * 0.368 / 2 * resize
  image(myBG, windowWidth / 2, windowHeight / 2, bgwid, bghei)
  image(myLogo, windowWidth / 2, windowHeight / 2, tgwid, tghei)
  // image(myElon, windowWidth / 2, windowHeight / 2, 
  console.log(analyzer.getLevel())
  volume = analyzer.getLevel();

  resize = map(volume, 0, 0.5, 1, 1.5)
}

function mouseClicked() {
  if (mySong.isPlaying() == false) { //returns the Boolean value (true or false)
    mySong.play();

  }
}
