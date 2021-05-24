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


card.addEventListener("click", cardFlip);


function cardFlip() {
  card.classList.toggle("cardFlip");
}

document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("card2").classList.toggle("cardFlip2");
});




