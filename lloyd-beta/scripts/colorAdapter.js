import $ from 'jquery'

const $logo = $('#logo-small')
const $hamburgerPath = $('#hamburger').find('path')
const $downArrowPath = $('.arrowDown').find('path')
const $controlArrowsPath = $('.fp-controlArrow').find('path')
const backgroundImages = $('#main .section').map((i, el) => $(el).css('background-image').slice(5, -2))

let lightColorScheme = true

export default function adaptColorTo(i) {
  const imageUrl = backgroundImages[i-1]

  if (imageUrl) {
    getImageLightness(imageUrl, brightness => setColors(brightness))
  }
  else {
    setLightColorScheme()
  }
}

function setColors(brightness) {
  if (brightness < 103) {
    if (lightColorScheme) {
      setDarkColorScheme()
    }
  }
  else if (!lightColorScheme) {
    setLightColorScheme()
  }
}

function setDarkColorScheme() {
  $logo.css('color', 'white')
  $hamburgerPath.css('fill', 'white')
  $downArrowPath.css('fill', 'white')
  $controlArrowsPath.css('fill', 'white')
  lightColorScheme = false
}

function setLightColorScheme() {
  $logo.css('color', 'black')
  $hamburgerPath.css('fill', 'black')
  $downArrowPath.css('fill', 'black')
  $controlArrowsPath.css('fill', 'black')
  lightColorScheme = true
}

function getImageLightness(imageSrc,callback) {
  var img = document.createElement("img");
  img.src = imageSrc;
  img.style.display = "none";
  document.body.appendChild(img);

  var colorSum = 0;

  img.onload = function() {
    // create canvas
    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(this,0,0);

    var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    var data = imageData.data;
    var r,g,b,avg;

    for(var x = 0, len = data.length; x < len; x+=4) {
      r = data[x];
      g = data[x+1];
      b = data[x+2];

      avg = Math.floor((r+g+b)/3);
      colorSum += avg;
    }

    var brightness = Math.floor(colorSum / (this.width*this.height));
    callback(brightness);
  }
}
