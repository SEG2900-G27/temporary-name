const navlinks = document.querySelectorAll(".navbar ul a");

const serviceSection = document.getElementById("our-service");
const sliders = document.querySelectorAll(".slide-in");

for (const link of navlinks) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

const options = {
  threshold: 0,
  rootMargin: '-30% 0px -30% 0%'
};

const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
     if (!entry.isIntersecting){
       entry.target.classList.remove("appear");
       return;
     } else{
       entry.target.classList.add("appear");
     }
  })
}, options);

sliders.forEach(slider => {
  observer.observe(slider, options);
})

/*Donations*/
var money = 10685

window.onload = function() {
    document.getElementById("donation-progress").innerHTML = "Donations received so far: " + money + "$"
}

function openDonation() {
    document.getElementById("donationForm").style.display = "block";
}

function submitDonation() {
    money += Number(document.getElementById("donation-amount").value);
    document.getElementById("donation-progress").innerHTML = "Donations received so far: " + money + "$"
    document.getElementById("donationForm").style.display = "none";

}

function closeDonation() {
    document.getElementById("donationForm").style.display = "none";
}