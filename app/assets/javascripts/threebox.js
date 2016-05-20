var box1 = false
var box2 = false
var box3 = false

function  threeBox(box){

  switch (box) {
    case "box1":
        box1 = true;
        break;
    case "box2":
        box2 = true;
        break;
    case "box3":
        box3 = true;
        break;
    default:
  }

  if (box1 == true && box2 == true && box3 == true){
    alert("You win!")
  }

}
