let button1, button2,button3, button4;
let img1, img2,img3;
let currentSprite = null;
let frame = 0;
let iframe;

function preload() {
  img1 = loadImage('all_1.png');
  img2 = loadImage('all_2.png');
  img3 = loadImage('all_3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  button1 = createButton('自我介紹');
  button1.position(150, 25);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => currentSprite = 'sprite1');
  button1.mouseOut(() => currentSprite = null);
  button1.mousePressed(() => createIframe('https://cfchengit.github.io/20250317_1/'));
  
  button2 = createButton('作品簡介');
  button2.position(280, 25);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => currentSprite = 'sprite2');
  button2.mouseOut(() => currentSprite = null);
  button2.mousePressed(() => createIframe('https://cfchengit.github.io/20250310/'));
  
  button3 = createButton('筆記說明');
  button3.position(450, 25);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => currentSprite = 'sprite3');
  button3.mouseOut(() => currentSprite = null);

  button4 = createButton('測驗題');
  button4.position(570, 25);
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.mouseOver(() => currentSprite = 'sprite3');
  button4.mouseOut(() => currentSprite = null);
}

function draw() {
  background(220);
  
  if (currentSprite === 'sprite1') {
    displaySprite(img1, 67.4, 64, 9);
  } else if (currentSprite === 'sprite2') {
    displaySprite(img2, 55.3, 63, 3);
  }else if (currentSprite === 'sprite3') {
    displaySprite(img3, 90.3, 105, 8);
  }
}

function displaySprite(img, frameWidth, frameHeight, numFrames) {
  let x = 50;
  let y = 20;
  let index = Math.floor(frame / 10) % numFrames;
  let sx = index * frameWidth;
  let sy = 0;
  image(img, x, y, frameWidth, frameHeight, sx, sy, frameWidth, frameHeight);
  frame++;
}

function createIframe(url) {
  if (iframe) {
    iframe.remove();
  }
  iframe = createElement('iframe');
  iframe.attribute('src', url);
  iframe.position(windowWidth * 0.1, windowHeight * 0.1);
  iframe.size(windowWidth * 0.8, windowHeight * 0.6);
}
