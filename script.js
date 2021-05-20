function myFunction1() {
  document.getElementById("brush").innerHTML =
    "Why is there a paint brush in the middle of whatever the fuck that is?!";
}

function myFunction2() {
  document.getElementById("tired").innerHTML =
    "I am far too tired to comment but looked like you got ripped off";
}







function myFunction() {
  document.getElementById("brush2").style.color = "red";
}

function show1() {
  document.getElementById("show").style.display = "block";
}

function hide() {
  document.getElementById("img").style.display = "none"; //hide
}




const card = document.getElementById("card");
const card2 = document.getElementById("card2");

card.addEventListener("click", cardFlip);
card2.addEventListener("click", cardFlip);

function cardFlip() {
  card.classList.toggle("cardFlip");
  card2.classList.toggle("cardFlip");
}