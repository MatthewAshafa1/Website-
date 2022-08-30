//pre-loader
const loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish(){
  loader.classList.add("disappear")
}

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contents = document.querySelector(".contents")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    contents.classList.toggle("active");
}) 


//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("activate");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// set date and time count down
 var countDownDate = new Date (" Sep 04, 2022  09:00:00").getTime();

 //update the count down every one second

 var countdownfunction = setInterval(function() {
   //get tdays date

   var now = new Date().getTime();

   //find the distance between now at the count down date

   var distance = countDownDate -  now;
   

   //Time calculations for days, hours and minutes and seconds 

   var days = Math.floor(distance / (1000 * 60 * 60 * 24));

   var hours = Math.floor((distance /  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

   var minutes = Math.floor((distance % (1000* 60 * 60 )) / (1000 * 60));

   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   //output the result in ans element a with ? id = demo...

   document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

   //if the count down is over write some text

   if(distance < 0) {

    clearInterval(countdownfunction);

    document.getElementById("demo").innerHTML = "LOADING...";
   }

     
 }, 1000);
