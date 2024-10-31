(() => {
  // <stdin>
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  if (localStorage.getItem("color-theme") === "dark" || !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeToggleLightIcon.classList.remove("hidden");
    document.querySelectorAll(".sponsor-image-light").forEach((el) => el.classList.add("hidden"));
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
    document.querySelectorAll(".sponsor-image-dark").forEach((el) => el.classList.add("hidden"));
  }
  var themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleBtn.addEventListener("click", function() {
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");
    document.querySelectorAll(".sponsor-image-dark").forEach((el) => el.classList.toggle("hidden"));
    document.querySelectorAll(".sponsor-image-light").forEach((el) => el.classList.toggle("hidden"));
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
})();
