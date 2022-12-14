/*
window.onload = () => {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 200);

  console.log(transition_el);

  console.log(transition_el);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      //Every Time you click on a link
      e.preventDefault(); //Prevent going to the different page
      let target = e.currentTarget.href; //Store the link name in target variable

      transition_el.classList.add("is-active"); //Add animation class to the page

      setInterval(() => {
        window.location.href = target; // Wait 500ms, then load the next page.
      }, 200);

    });
  }
};
*/

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
