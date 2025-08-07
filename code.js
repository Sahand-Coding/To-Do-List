function themech() {
  if (document.body.className == "light") {
    document.body.className = "dark";
    document.getElementById("pic").src = "./pic/moon.png";
    document.getElementById("ehyek").style.color = "lightblue";
    document.getElementById("ehyek").innerHTML = "Sahand's night";
    document.getElementById("neveshtan").style.color = "blue";
    document.getElementById("ulasli").style.color = "darkblue";
  } else {
    document.body.className = "light";
    document.getElementById("pic").src = "./pic/contrast.png";
    document.getElementById("ehyek").style.color = "orange";
    document.getElementById("ehyek").innerHTML = "Sahand's day";
    document.getElementById("neveshtan").style.color = "black";
    document.getElementById("ulasli").style.color = "black";
  }
}

function additems() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("neveshtan").value;
  document.getElementById("neveshtan").innerHTML = " ";
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("ulasli").appendChild(li);
}
