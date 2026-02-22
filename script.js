function openMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
  document.body.style.overflow = "";
}

/* Active nav highlight */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const top = section.offsetTop - window.innerHeight / 3;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

/* Hero animation */
window.addEventListener("load", () => {
  document.querySelector(".hero-title").classList.add("show");
  document.querySelector(".hero-text").classList.add("show");
});