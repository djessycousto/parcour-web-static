// footer

// date

// const

const images = document.querySelectorAll(".image-container-gal img ");
console.log(images);

images.forEach((image) => {
  image.style.filter = "grayscale(100%)";

  image.addEventListener("mouseenter", (e) => {
    image.style.filter = "grayscale(0)";
  });

  image.addEventListener("mouseleave", (e) => {
    image.style.filter = "grayscale(100%)";
  });
});

const d = new Date();

let thisYear = d.getFullYear();
const date = document.querySelector(".footer-box .date");
date.textContent = `  ${thisYear} `;

//   <!-- nav -->

const toggleNav = document.querySelector(".toggle-menu");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// the height

toggleNav.addEventListener("click", () => {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// window.addEventListener("resize", () => {
//   // Recalculate and set the height if the navigation menu is open
//   if (linksContainer.style.height !== "0px") {
//     setLinksContainerHeight();
//   }
// });

// Close the menu when clicking outside the menu or toggle button
document.addEventListener("click", (event) => {
  const isClickInsideMenu = linksContainer.contains(event.target);
  console.log(isClickInsideMenu);
  console.log(event.target);
  const isClickOnToggleNav = toggleNav.contains(event.target);
  console.log(isClickOnToggleNav);

  if (!isClickInsideMenu && !isClickOnToggleNav) {
    // Click outside the menu or toggle button, close the menu
    linksContainer.style.height = 0;
  }
});

// linksContainer.style.height = 0;

// <!-- ###### Section  numbers #####  -->

const numbs = [...document.querySelectorAll(".numb")];
// const updateCount

const updateCount = (element) => {
  let initialvalue = 0;
  // get dataset

  //   const value = parseInt(element.dataset.value); //
  const value = parseInt(element.dataset.value); //

  // #####  increment value ############

  const increment = Math.ceil(value / 1000);

  // setInterval

  const increaseCount = setInterval(() => {
    initialvalue += increment;

    if (initialvalue > value) {
      element.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    element.textContent = `${initialvalue}+`;
  }, 1);
};

numbs.forEach((numb) => {
  updateCount(numb);
});

// ############image page one ################
