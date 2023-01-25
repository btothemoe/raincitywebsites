window.onload = () => {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelectorAll(".hero-header");
  const transition_el2 = document.querySelectorAll(".hero-p");
  const transition_el3 = document.querySelectorAll(".navbar-navigation a");
  const transition_el4 = document.querySelectorAll(".navbar-menu a");
  const transition_el5 = document.querySelectorAll(".navbar-overlay-animation");
  const transition_el6 = document.querySelectorAll(
    ".navbar-overlay-animation2"
  );

  console.log(transition_el5);

  //Header animation
  for (let i = 0; i < transition_el.length; i++) {
    const element = transition_el[i];

    setTimeout(() => {
      element.classList.remove("hero-transition");
    }, 200 * i);
  }

  //Sub Header Animation
  for (let i = 0; i < transition_el2.length; i++) {
    const element = transition_el2[i];

    setTimeout(() => {
      element.classList.remove("hero-transition");
    }, 600 + 200 * i);
  }

  //Navbar Animations
  setTimeout(() => {
    transition_el5[0].classList.remove("is-active");
  }, 600);

  setTimeout(() => {
    transition_el6[0].classList.remove("is-active");
  }, 600);

  setTimeout(() => {
    transition_el3[0].classList.remove("navbar-transition");
  }, 700);

  for (let i = 0; i < transition_el4.length; i++) {
    const element = transition_el4[i];

    setTimeout(() => {
      element.classList.remove("navbar-transition");
    }, 800 + 150 * i);
  }
};

/************    MOBILE NAVBAR    ************/
function openNav() {
  document.getElementById("myNav").style.height = "100%";

  for (let i = 1; i < 7; i++) {
    id = "link" + i;
    document.getElementById(id).style.transitionDelay = i - 1 + "50ms";
    document.getElementById(id).style.transform = "translate(0,0)";
  }
}

/* Close */
function closeNav() {
  for (let i = 1; i < 7; i++) {
    id = "link" + i;
    delay = 4;
    document.getElementById(id).style.transitionDelay = delay - i + "50ms";
    document.getElementById(id).style.transform = "translate(0,100%)";
  }

  setTimeout(closeNavWait, 1000);

  //function definition
  function closeNavWait() {
    document.getElementById("myNav").style.height = "0%";
  }
}

/************************/
