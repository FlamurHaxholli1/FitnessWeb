document.addEventListener("DOMContentLoaded", function () {
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });
  sr.reveal(".home-title, .home-img");
  sr.reveal(".home-intro", { delay: 800, origin: "bottom" });
  sr.reveal(".home-img", { delay: 800});
  sr.reveal(".program-container", { delay:400});
  sr.reveal(".cardio", { delay: 500 });
  sr.reveal(".yoga", { delay:650 });
  sr.reveal(".lifting ", { delay: 750 });
  sr.reveal(".choose-img");
  sr.reveal(".reason", { origin: "bottom"});
  sr.reveal("#basic-card ", { delay: 850 });
  sr.reveal("#premium-card ", { delay: 950 });
  sr.reveal("#diamond-card ", { delay: 1050 });
  sr.reveal(".calc-bmi", { origin: "left" });
  sr.reveal(".bmi-img", { origin: "right" });
  sr.reveal(".footer-logo", { origin: "left" });
  sr.reveal("#footer-c-1", { delay: 500, origin: "bottom"});
  sr.reveal("#footer-c-2", { delay: 650, origin: "bottom"});
  sr.reveal("#footer-c-3", { delay: 750, origin: "bottom"});
  sr.reveal(".media",{delay: 850, origin: "bottom"});
});
// =========================================================

// Get the form and input elements
const calculateForm = document.getElementById('calc-form');
const calcCm = document.getElementById('calc-cm');
const calcKg = document.getElementById('calc-kg');
const calcMessage = document.getElementById('calc-message');
const calcBtn = document.getElementById('calc-btn')

// Funksioni qe kalkulon Bmi
const calculateBmi = (e) => {
    e.preventDefault();

    // Valedon nese inputet kane vlere
    if (calcCm.value === '' || calcKg.value === '') {
        calcMessage.classList.remove('color-green');
        calcMessage.classList.add('color-red');

        // Shfaqe mesazhin
        calcMessage.textContent = 'Fill in the Height and Weight';

        //Fshije mesazhin
         setTimeout(() => {
          calcMessage.textContent = ''
         }, 3000);
    } else {
      // Formula e BMI

      const cm = calcCm.value / 100,
            kg = calcKg.value,
            bmi = Math.round(kg / (cm * cm))

            //Trego shendetin momental
            if(bmi < 18.5) {
              //Shto ngjyren edhe mesazhin
              calcMessage.classList.add('color-green')
              calcMessage.textContent = `Your BMI is ${bmi} and you are skinny 😞`
            } else if(bmi < 25) {
              calcMessage.classList.add('color-green')
              calcMessage.textContent = `Your BMI is ${bmi} and you are Healthy 😊`
            } else {
               calcMessage.classList.add('color-green')
              calcMessage.textContent = `Your BMI is ${bmi} and you are Overweight 😞`
            }
            //Fshij te dhenat pas rezultatit 
            calcCm.value = ''
            calcKg.value = ''

            //Fshije mesazhin pas 4 sekondav
            setTimeout(() =>{
              calcMessage.textContent = ''
            }, 4000)
    }
};

// Add event listener to the form
calculateForm.addEventListener('submit', calculateBmi);


/*================================= RESPONSIVE MENU BAR ==================================== */
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const closeToggle = document.querySelector(".close-toggle");
  const navLinks = document.querySelector("ul");

  let isNavLinksVisible = false;

  // Function to open the navigation menu
  function openNavLinks() {
    navLinks.style.right = "-50%";
    closeToggle.style.display = "block"; // Show close toggle
    menuBtn.style.display = "none"; // Hide menu button
    isNavLinksVisible = true;
  }

  // Function to close the navigation menu
  function closeNavLinks() {
    navLinks.style.right = "-100%";
    closeToggle.style.display = "none"; // Hide close toggle
    menuBtn.style.display = "block"; // Show menu button
    isNavLinksVisible = false;
  }

  menuBtn.addEventListener("click", function () {
    console.log("Menu button clicked"); // Debugging statement
    if (!isNavLinksVisible) {
      openNavLinks();
    } else {
      closeNavLinks();
    }
  });

  closeToggle.addEventListener("click", function () {
    console.log("Close toggle clicked"); // Debugging statement
    closeNavLinks();
  });
});
