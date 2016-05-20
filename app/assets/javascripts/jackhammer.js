var counter = 1
function jackhammer(box) {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  box.style["background-color"] = hue;
  counter ++;
  if (counter < 5) {
    alert(counter);
  }else{
    alert("You Won!");
  }
}
