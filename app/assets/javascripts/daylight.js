function daylight(box){

  var color = box.id;
  console.log(color);

  var status = box.textContent;
  console.log(status);

  var boxWithText = document.getElementById("output");
  boxWithText.innerHTML =  status;

  document.body.style["background-color"] = color;

}
