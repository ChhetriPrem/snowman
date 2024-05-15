var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

var slides1 = [
  "images/vanilla.png",
  "images/chocolate.png",
  "images/kesarpista.png",
];
var slides2 = [
  "images/kesarpista.png",

  "images/vanilla.png",
  "images/chocolate.png",
];
var Start1 = 0;
var Start2 = 0;

function slider() {
  if (Start1 < slides1.length) {
    Start1 = Start1 + 1;
  } else {
    Start1 = 1;
  }

  if (Start2 < slides2.length) {
    Start2 = Start2 + 1;
  } else {
    Start2 = 1;
  }
  img1.src = slides1[Start1 - 1];
  img2.src = slides2[Start2 - 1];
}
setInterval(slider, 2000);
