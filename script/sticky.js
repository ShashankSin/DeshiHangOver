window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggole("sticky", window.scrollY > 0);
});
