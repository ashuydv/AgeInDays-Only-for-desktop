function getAge(){
  var birthYear = document.getElementById("birth-year").value;
  var birthDays = (2020-birthYear)*365;
  document.getElementById("result").innerText=birthDays;
  
}
function reset(){
  document.getElementById("result").innerText="";
  document.getElementById("birth-year").value="";
}