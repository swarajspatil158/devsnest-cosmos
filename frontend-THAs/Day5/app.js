let [x, y, z] = [0, 0, 0];
setInterval(() => {
  document.querySelector(".sec").style.transform = "rotate(" + x + "deg)";
  x += 1;
}, 10);
setInterval(() => {
  document.querySelector(".min").style.transform = "rotate(" + y + "deg)";
  y += 1;
}, 600);
setInterval(() => {
  document.querySelector(".hour").style.transform = "rotate(" + z + "deg)";
  z += 1;
}, 36000);