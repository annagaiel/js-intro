var total = 0;
function sum(number){
  var answer = document.getElementById("output");
  total += parseInt(number.textContent)
  answer.innerHTML =  total;

}
