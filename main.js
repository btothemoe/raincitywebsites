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
  const transition_el = document.querySelectorAll(".hero-header");
  const transition_el2 = document.querySelectorAll(".hero-p");

  for (let i = 0; i < transition_el.length; i++) {
    const element = transition_el[i];

    setTimeout(() => {
      element.classList.remove("hero-transition");
    }, 200 * i);
  }

  for (let i = 0; i < transition_el2.length; i++) {
    const element = transition_el2[i];

    setTimeout(() => {
      element.classList.remove("hero-transition");
    }, 600 + 200 * i);
  }

  console.log(transition_el2);
};
