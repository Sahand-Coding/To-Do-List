function themech() {
  if (document.body.className == "light") {
    document.body.className = "dark";
    document.getElementById("pic").src = "./pic/moon.png";
    document.getElementById("ehyek").style.color = "lightblue";
    document.getElementById("ehyek").innerHTML = "Sahand's night";
  } else {
    document.body.className = "light";
    document.getElementById("pic").src = "./pic/contrast.png";
    document.getElementById("ehyek").style.color = "orange";
    document.getElementById("ehyek").innerHTML = "Sahand's day";
  }
}
