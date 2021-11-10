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
  rootMargin: '-10% 0px -10% 0%'
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

function openDonation() {
    document.getElementById("donationForm").style.display = "block";
}

function submitDonation() {
    donation = Number(document.getElementById("donation-amount").value);
    userName = document.getElementById("user-name").value;
    if (userName != "") {
      if (donation > 0) {
        money += donation
        document.getElementById("donation-progress").innerHTML = "Progress until our next goal: " + money + "$ / 100000$";
        document.getElementById("donation-progress-bar").value = money
        document.getElementById("donationForm").style.display = "none";
        document.getElementById("donation-message").innerHTML = userName + ", thank you very much for your donation!"
        if (money > 100000) {
          document.getElementById("donation-message").innerHTML = userName + ", thank you for helping us reach our goal!"
        }
      }
      else {
        document.getElementById("donation-amount").placeholder = "Donation amount must be number bigger than 0";
      }
      document.getElementById("donation-amount").value = null;
    }
    else {
      document.getElementById("user-name").placeholder = "Please give us your name"
    }

}

function closeDonation() {
    document.getElementById("donationForm").style.display = "none";
}

/*Contact Us Stuff*/

const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const nameInput = document.querySelector(
  'input[name="name"]'
);
const emailInput = document.querySelector(
  'input[name="email"]'
);
const phoneInput = document.querySelector(
  'input[name="phone"]'
);
const messageInput = document.querySelector(
  'textarea[name="message"]'
);

const inputs = [nameInput, emailInput, phoneInput, messageInput];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");
}

const validateInputs = () => {
  if (!isValidationOn) return;

  isFormValid = true;
  inputs.forEach(resetElm);

  if (!nameInput.value){
    isFormValid = false;
    invalidateElm(nameInput)
  }

  if(!emailInput.value){
    isFormValid = false;
    invalidateElm(emailInput)
  }

  if(!phoneInput.value){
    isFormValid = false;
    invalidateElm(phoneInput)
  }

  if(!messageInput.value){
    isFormValid = false;
    invalidateElm(messageInput)
  }
};

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid){
    form.remove();
    thankYou.classList.remove("hidden");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
